import { Linkedin, Github, FileText, Mail } from "lucide-react";
import { SocialButtonProps } from "./types";

const buttonOptions = {
  Linkedin: Linkedin,
  Github: Github,
  FileText: FileText,
  Mail: Mail,
};

const SocialButton = ({ name, icon, url }: SocialButtonProps) => {
  const Icon = buttonOptions[icon];
  return (
    <a href={url} title={name}>
      <Icon />
    </a>
  );
};

export default SocialButton;
