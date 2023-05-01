import SocialButton from "@/components/SocialButton";
import { SocialButtonProps } from "@/components/SocialButton/types";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400"] });

const SocialButtons: SocialButtonProps[] = [
  { name: "CV", icon: "FileText", url: "/public/sebatian-preston-cv.pdf" },
  { name: "Email", icon: "Mail", url: "mailto:seb@sebastianpreston.com" },
  { name: "GitHub", icon: "Github", url: "https://github.com/sebprest" },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://linkedin.com/in/sebprest",
  },
];

function HomePage() {
  return (
    <main
      className={`flex h-screen w-screen items-center justify-center ${roboto.className}`}
    >
      <article className="rounded-xl bg-slate-100 p-8 shadow-xl md:max-w-xl">
        <h1 className="text-2xl">
          <span className="font-thin">Sebastian</span> Preston
        </h1>
        <p>
          Software Engineer with 5 years of professional experience designing,
          developing and deploying mission-critical web and mobile applications
        </p>
        <div className="flex w-1/4 flex-row justify-between">
          {SocialButtons.map(({ name, icon, url }) => (
            <SocialButton name={name} icon={icon} url={url} key={name} />
          ))}
        </div>
      </article>
    </main>
  );
}

export default HomePage;
