import { useLanguage } from "@contexts/LanguageContext";

import AboutEn from "@pages/about/about.en.tsx";
import AboutFr from "@pages/about/about.fr.tsx";
import AboutJp from "@pages/about/about.jp.tsx";
import AboutCn from "@pages/about/about.cn.tsx";

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
