import { useLanguage } from "@contexts/LanguageContext";

import HomeEn from "@pages/home/Home.en.tsx";
import HomeFr from "@pages/home/Home.fr.tsx";
import HomeJp from "@pages/home/Home.jp.tsx";
import HomeCn from "@pages/home/Home.cn.tsx";

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
