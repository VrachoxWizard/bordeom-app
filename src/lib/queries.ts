import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db';
import { DEFAULT_SETTINGS } from '../features/settings/types';

const getDayKey = (date: Date) => date.toISOString().split('T')[0];

export function useTodayData() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return useLiveQuery(async () => {
    const sessions = await db.sessions
      .where('startedAt')
      .above(today)
      .and(s => s.status === 'completed')
      .toArray();

    const urges = await db.urges
      .where('createdAt')
      .above(today)
      .toArray();

    const reflection = await db.reflections.get({ dateKey: getDayKey(new Date()) });

    return { 
      sessions, 
      urges, 
      reflection,
      totals: {
        sessionCount: sessions.length,
        minutesCount: sessions.reduce((acc, s) => acc + s.durationMinutes, 0),
        urgeCount: urges.length,
        isReflected: !!reflection
      }
    };
  }, []);
}

export function useLatestActivity(limit = 3) {
  return useLiveQuery(async () => {
    const sessions = await db.sessions.orderBy('startedAt').reverse().limit(limit).toArray();
    const urges = await db.urges.orderBy('createdAt').reverse().limit(limit).toArray();
    const reflections = await db.reflections.orderBy('id').reverse().limit(limit).toArray();

    const combined = [
      ...sessions.map(s => ({ ...s, type: 'session' as const, date: new Date(s.startedAt) })),
      ...urges.map(u => ({ ...u, type: 'urge' as const, date: new Date(u.createdAt) })),
      ...reflections.map(r => ({ ...r, type: 'reflection' as const, date: new Date() })) // reflections don't have createdAt yet in schema, using current for now or fixing schema
    ].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, limit);

    return combined;
  }, []);
}

export function useRecentUrges(limit = 10) {
  return useLiveQuery(
    () => db.urges.orderBy('createdAt').reverse().limit(limit).toArray(),
    []
  );
}

export function useAppSettings() {
  return useLiveQuery(async () => {
    const settings = await db.settings.get('current');
    return settings || DEFAULT_SETTINGS;
  }, []);
}

export function useInsightsData() {
  return useLiveQuery(async () => {
    const allSessions = await db.sessions.where('status').equals('completed').toArray();
    const allUrges = await db.urges.toArray();
    const allReflections = await db.reflections.toArray();

    // Last 7 days grid logic
    const last7Days = [...Array(7)].map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      d.setHours(0,0,0,0);
      return { 
        date: d, 
        key: getDayKey(d),
        sessions: 0,
        urges: 0,
        hasReflection: false
      };
    }).reverse();

    allSessions.forEach(s => {
      const key = getDayKey(new Date(s.startedAt));
      const day = last7Days.find(d => d.key === key);
      if (day) day.sessions++;
    });

    allUrges.forEach(u => {
      const key = getDayKey(new Date(u.createdAt));
      const day = last7Days.find(d => d.key === key);
      if (day) day.urges++;
    });

    allReflections.forEach(r => {
      const day = last7Days.find(d => d.key === r.dateKey);
      if (day) day.hasReflection = true;
    });

    return {
      totals: {
        sessions: allSessions.length,
        minutes: allSessions.reduce((acc, s) => acc + s.durationMinutes, 0),
        urges: allUrges.length,
        reflections: allReflections.length
      },
      activity: last7Days,
      patterns: {
        topTrigger: getFrequent(allUrges.map(u => u.trigger)),
        topType: getFrequent(allUrges.map(u => u.urgeType)),
        topDifficulty: getFrequent(allReflections.map(r => r.mainDifficulty))
      }
    };
  }, []);
}

function getFrequent<T>(arr: T[]): T | null {
  if (arr.length === 0) return null;
  const counts = arr.reduce((acc, val) => {
    acc.set(val, (acc.get(val) || 0) + 1);
    return acc;
  }, new Map<T, number>());
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
}
