export interface AppSettings {
  id: 'current';
  defaultDuration: number;
  showPrompts: boolean;
  reducedMotion: boolean;
  timeFormat: '12h' | '24h';
}

export const DEFAULT_SETTINGS: AppSettings = {
  id: 'current',
  defaultDuration: 5,
  showPrompts: true,
  reducedMotion: false,
  timeFormat: '24h'
};
