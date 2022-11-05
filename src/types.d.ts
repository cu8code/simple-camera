
export interface Dimension {
  height: number;
  width: number;
}

export interface Option {
  rootElement: HTMLElement | null;
  dimension?: Dimension;
  border?:string;
  style?:string;
}
