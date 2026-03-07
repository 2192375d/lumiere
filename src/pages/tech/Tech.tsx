import { useLanguage } from "@contexts/LanguageContext";

import TechEn from "@pages/tech/Tech.en.tsx";
import TechFr from "@pages/tech/Tech.fr.tsx";
import TechJp from "@pages/tech/Tech.jp.tsx";
import TechCn from "@pages/tech/Tech.cn.tsx";

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
