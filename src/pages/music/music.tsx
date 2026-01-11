import { useLanguage } from "@contexts/LanguageContext";

import MusicEn from "@pages/music/music.en.tsx";
import MusicFr from "@pages/music/music.fr.tsx";
import MusicJp from "@pages/music/music.jp.tsx";
import MusicCn from "@pages/music/music.cn.tsx";

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
