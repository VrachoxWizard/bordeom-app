import Dexie, { type EntityTable } from 'dexie';
import type { UrgeRecord } from '../features/urge/types';
import type { ReflectionRecord } from '../features/reflection/types';
import type { AppSettings } from '../features/settings/types';

export interface SessionRecord {
  id?: number;
  startedAt: Date;
  completedAt?: Date;
  durationMinutes: number;
  mood?: 'very restless' | 'restless' | 'neutral' | 'calm' | 'very calm';
  urgeCount?: number;
  note?: string;
  status: 'completed' | 'cancelled';
}

const db = new Dexie('BoredomGymDB') as Dexie & {
  sessions: EntityTable<SessionRecord, 'id'>;
  urges: EntityTable<UrgeRecord, 'id'>;
  reflections: EntityTable<ReflectionRecord, 'id'>;
  settings: EntityTable<AppSettings, 'id'>;
};

// Schema definition
db.version(3).stores({
  sessions: '++id, startedAt, durationMinutes, status',
  urges: '++id, createdAt, urgeType, trigger',
  reflections: '++id, dateKey, createdAt',
  settings: 'id'
});

export { db };
