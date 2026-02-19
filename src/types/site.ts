import type { ReactNode } from "react";

export interface ServiceCard {
  title: string;
  desc: string;
  icon: ReactNode;
}

export interface PhilItem {
  num: string;
  title: string;
  desc: string;
}

export interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: LinkItem[];
}
