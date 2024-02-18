import type React from "react";

export interface SidebarItemType {
  path: string;
  textKey: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}
