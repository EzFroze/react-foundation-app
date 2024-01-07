import type React from "react";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
  path: string;
  textKey: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    textKey: "toMainPage",
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    textKey: "toAboutPage",
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    textKey: "toProfilePage",
    authOnly: true,
  },
];
