import {
  AccountCircle,
  Article,
  ContactMail,
  School,
} from "@mui/icons-material";

export const menuItems = [
  { label: "دوره ها", href: "/courses", icon: <School /> },
  { label: "اساتید", href: "/teachers", icon: <AccountCircle /> },
  { label: "ارتباط با ما", href: "/contact-us", icon: <ContactMail /> },
  { label: "اخبار و مقالات", href: "/news", icon: <Article /> },
];
