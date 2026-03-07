import { useLanguage } from "@contexts/LanguageContext";

import MusicEn from "@pages/music/Music.en.tsx";
import MusicFr from "@pages/music/Music.fr.tsx";
import MusicJp from "@pages/music/Music.jp.tsx";
import MusicCn from "@pages/music/Music.cn.tsx";

export default function Music() {
  const { language } = useLanguage();

  if (language === "french") {
    return <MusicFr />;
  }
  if (language === "japanese") {
    return <MusicJp />;
  }
  if (language === "chinese") {
    return <MusicCn />;
  }

  return <MusicEn />;
}
