export interface ShadowParams {
  id: string;
  horizontalOffset: number;
  verticalOffset: number;
  blurRadius: number;
  spreadRadius: number;
  color: string;
  opacity: number;
  inset: boolean;
}

export interface ShadowPreset {
  name: string;
  description: string;
  shadows: Omit<ShadowParams, 'id'>[];
}
