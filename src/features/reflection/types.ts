import type { Trigger } from '../urge/types';

export type Restlessness = 'very restless' | 'restless' | 'neutral' | 'calm' | 'very calm';
export type Presence = 'very disconnected' | 'disconnected' | 'mixed' | 'present' | 'deeply present';
export type ReflectionDifficulty = Trigger | 'none';
export type StimulatedAvoidance = 'yes' | 'partly' | 'no';

export interface ReflectionRecord {
  id?: number;
  dateKey: string; // YYYY-MM-DD
  createdAt: Date;
  updatedAt: Date;
  restlessness: Restlessness;
  presence: Presence;
  mainDifficulty: ReflectionDifficulty;
  didAvoidWithStimulation: StimulatedAvoidance;
  note?: string;
}
