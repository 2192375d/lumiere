import { useLanguage } from "@contexts/LanguageContext";

import TechEn from "@pages/tech/tech.en.tsx";
import TechFr from "@pages/tech/tech.fr.tsx";
import TechJp from "@pages/tech/tech.jp.tsx";
import TechCn from "@pages/tech/tech.cn.tsx";

export default function Tech() {
  const { language } = useLanguage();

  if (language === "french") {
    return <TechFr />;
  }
  if (language === "japanese") {
    return <TechJp />;
  }
  if (language === "chinese") {
    return <TechCn />;
  }

  return <TechEn />;
}
