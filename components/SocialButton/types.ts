type Icon = "Linkedin" | "Github" | "FileText" | "Mail";

export interface SocialButtonProps {
  name: string;
  icon: Icon;
  url: string;
}
