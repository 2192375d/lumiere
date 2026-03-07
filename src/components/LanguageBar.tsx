import { useLanguage } from "@contexts/LanguageContext";

import './LanguageBar.css';
// const languages: Language[] = ["english", "french", "japanese", "chinese"];

export default function LanguageBar() {
  const { setLanguage } = useLanguage();

  return (
    <>
      <div className="hcontainer languagebar">
        <button
          onClick={() => setLanguage("english")}>
          en
        </button>
        <button
          onClick={() => setLanguage("french")}>
          fr
        </button>
        {/* <button */}
        {/*   onClick={() => setLanguage("japanese")}> */}
        {/*   あ */}
        {/* </button> */}
        <button
          onClick={() => setLanguage("chinese")}>
          中
        </button>
      </div>
    </>
  );
}
