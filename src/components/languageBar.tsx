import { useLanguage } from "@contexts/languageContext";
// const languages: Language[] = ["english", "french", "japanese", "chinese"];

export default function LanguageBar() {
  const { setLanguage } = useLanguage();

  return (
    <>
      <div className="hcontainer">
        <button
          onClick={() => setLanguage("english")}>
          en
        </button>
        <button
          onClick={() => setLanguage("french")}>
          fr
        </button>
        <button
          onClick={() => setLanguage("japanese")}>
          あ
        </button>
        <button
          onClick={() => setLanguage("chinese")}>
          中
        </button>
      </div>
    </>
  );
}
