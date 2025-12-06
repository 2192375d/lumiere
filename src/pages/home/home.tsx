// src/pages/home.tsx
import { useLanguage } from "@contexts/languageContext";

import HomeEn from "@pages/home/home.en.tsx";
import HomeFr from "@pages/home/home.fr.tsx";

export default function Home() {
  const { language } = useLanguage();

  if (language === "french") {
    return <HomeFr />;
  }
  //
  // if (language === "japanese") {
  //   return <HomeJapanese />;
  // }
  //
  // if (language === "chinese") {
  //   return <HomeChinese />;
  // }

  // default
  return <HomeEn />;
}
