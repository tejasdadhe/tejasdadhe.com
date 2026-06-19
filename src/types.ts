import type { ReactNode } from "react";

export interface CtaProps {
  title: string;
  type: CtaType;
  on_click?: () => void;
  icon: ReactNode;
}

export type CtaType = "primary" | "secondary" | "transparent";
