export type NavLink = {
  label: string;
  url: string;
};

export type SelectOption = {
  label: string;
  value: string;
};

export type NavItem = NavLink;

export type Category = SelectOption & {
  description: string;
  image: string;
};

export type BaseConfig = {
  navItems: NavItem[];
  categories: Category[];
  footerLinkGroups: { title: string; links: NavLink[] }[];
};

export type PostConfig = {
  tags: SelectOption[];
};
