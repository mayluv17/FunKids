import skating_icon from "assets/skating_icon.svg";
import football_icon from "assets/football_icon.svg";
import swimming_icon from "assets/swimming_icon.svg";
import cycling_icon from "assets/cycling_icon.svg";

export interface categoryProp {
  id?: number;
  title: string;
  subtitle: string;
  color: string;
  icon: string;
}

export const categoryData: categoryProp[] = [
  {
    id: 1,
    title: "Go skating",
    subtitle: "Earn at least 20 point from skating today",
    color: "bg-purple",
    icon: skating_icon,
  },
  {
    id: 2,
    title: "Swimming",
    subtitle: "Earn at least 20 point from swimming today",
    color: "bg-bluesky",
    icon: swimming_icon,
  },
  {
    id: 3,
    title: "Cycling",
    subtitle: "Earn at least 20 point from Cycling today",
    color: "bg-onionDeep",
    icon: cycling_icon,
  },
  {
    id: 4,
    title: "Football",
    subtitle: "Earn at least 20 point from Football today",
    color: "bg-yellow",
    icon: football_icon,
  },
];
