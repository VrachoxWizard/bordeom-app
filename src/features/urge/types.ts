export type UrgeType = 
  | 'phone' 
  | 'youtube' 
  | 'social media' 
  | 'random browsing' 
  | 'food' 
  | 'porn' 
  | 'escape / avoidance' 
  | 'other';

export type Intensity = 1 | 2 | 3 | 4 | 5;

export type Trigger = 
  | 'boredom' 
  | 'anxiety' 
  | 'stress' 
  | 'loneliness' 
  | 'confusion' 
  | 'fatigue' 
  | 'procrastination' 
  | 'discomfort' 
  | 'other';

export interface UrgeRecord {
  id?: number;
  createdAt: Date;
  urgeType: UrgeType;
  intensity: Intensity;
  trigger: Trigger;
  note?: string;
}
