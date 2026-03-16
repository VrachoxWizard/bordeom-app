import { db } from './db';
import type { Restlessness, Presence, ReflectionDifficulty, StimulatedAvoidance } from '../features/reflection/types';

export async function seedDemoData() {
  const now = new Date();
  
  const days = [0, 1, 2];
  
  for (const dayOffset of days) {
    const date = new Date();
    date.setDate(now.getDate() - dayOffset);
    const dateKey = date.toISOString().split('T')[0];

    // Add a session
    await db.sessions.add({
      durationMinutes: 10,
      startedAt: new Date(date.getTime() - 1000 * 60 * 60),
      completedAt: date,
      mood: (['restless', 'neutral', 'calm'][dayOffset % 3]) as Restlessness,
      urgeCount: 2,
      note: 'Demo: Felt a bit anxious at first but settled in.',
      status: 'completed'
    });

    // Add an urge
    await db.urges.add({
      urgeType: 'phone',
      intensity: 3,
      trigger: 'boredom',
      createdAt: new Date(date.getTime() - 1000 * 60 * 30),
      note: 'Demo: Wanted to check news.'
    });

    // Add a reflection
    await db.reflections.add({
      dateKey,
      createdAt: date,
      updatedAt: date,
      restlessness: (['restless', 'neutral', 'calm'][dayOffset % 3]) as Restlessness,
      presence: (['mixed', 'present', 'deeply present'][dayOffset % 3]) as Presence,
      mainDifficulty: (['boredom', 'anxiety', 'other'][dayOffset % 3]) as ReflectionDifficulty,
      didAvoidWithStimulation: 'no' as StimulatedAvoidance,
      note: 'Demo entry: Progress is being made.'
    });
  }
}
