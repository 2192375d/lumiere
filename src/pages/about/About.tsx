import { useLanguage } from "@contexts/LanguageContext";

import AboutEn from "@pages/about/About.en.tsx";
import AboutFr from "@pages/about/About.fr.tsx";
import AboutJp from "@pages/about/About.jp.tsx";
import AboutCn from "@pages/about/About.cn.tsx";

export default function About() {
  const { language } = useLanguage();

  if (language === "french") {
    return <AboutFr />;
  }
  if (language === "japanese") {
    return <AboutJp />;
  }
  if (language === "chinese") {
    return <AboutCn />;
  }

  return <AboutEn />;
}
