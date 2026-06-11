export interface CtaProps {
  title: String;
  type: CtaType;
  on_click?: Function;
  icon: any;
}

export type CtaType = "primary" | "secondary" | "transparent";

