import { useLanguage } from "@contexts/LanguageContext";

import HomeEn from "@pages/home/home.en.tsx";
import HomeFr from "@pages/home/home.fr.tsx";
import HomeJp from "@pages/home/home.jp.tsx";
import HomeCn from "@pages/home/home.cn.tsx";

export default function Home() {
  const { language } = useLanguage();

  if (language === "french") {
    return <HomeFr />;
  }
  if (language === "japanese") {
    return <HomeJp />;
  }
  if (language === "chinese") {
    return <HomeCn />;
  }

  return <HomeEn />;
}
