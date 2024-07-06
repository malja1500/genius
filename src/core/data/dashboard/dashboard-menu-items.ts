import { DashboardMenuItemInterface } from "../../../types/dashboard-menu-item";

export const DASHBOARD_MENU_ITEMS: DashboardMenuItemInterface[] = [
  {
    icon: "/src/assets/images/Dashboard/Icons/dashboard.svg",
    label: "داشبورد",
    href: "/dashboard",
  },
  {
    icon: "/src/assets/images/Dashboard/Icons/courses.svg",
    label: "دوره ها",
    href: "/dashboard/all-courses",
  },
  {
    icon: "/src/assets/images/Dashboard/Icons/book.svg",
    label: "دوره‌های من",
    href: "/dashboard/my-courses",
  },
  {
    icon: "/src/assets/images/Dashboard/Icons/note-2.svg",
    label: "دوره های رزرو شده",
    href: "/dashboard/course-reserves",
  },
  {
    icon: "/src/assets/images/Dashboard/Icons/user-edit.svg",
    label: "ویرایش پروفایل",
    href: "/dashboard/edit-profile",
  },
  {
    icon: "/src/assets/images/Dashboard/Icons/logout.svg",
    label: "خروج از حساب",
  },
] as const;
