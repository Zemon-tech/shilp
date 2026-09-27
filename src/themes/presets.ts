/**
 * Platform dimension presets. Keep small and extensible —
 * agents may pass explicit width/height instead.
 */
export interface Preset {
  width: number;
  height: number;
  label: string;
}

export const presets: Record<string, Preset> = {
  instagramPortrait: { width: 1080, height: 1350, label: "Instagram portrait (4:5)" },
  linkedinPortrait: { width: 1080, height: 1350, label: "LinkedIn portrait (4:5)" },
  square: { width: 1080, height: 1080, label: "Square (1:1)" },
  landscape: { width: 1200, height: 630, label: "Landscape / OG (1.91:1)" },
  story: { width: 1080, height: 1920, label: "Story / Reel (9:16)" },
};

export type PresetName = keyof typeof presets;
