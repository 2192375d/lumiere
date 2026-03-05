import SoundtrackPlayer from "@components/SoundtrackPlayer";
import type { Soundtrack } from "@contexts/SoundtrackContext";

const MUSIC_PATH = "/assets/musics/"

const Soundtracks: Array<Soundtrack> = [
  {
    id: "allice-departure-on-a-winter-adventure",
    title: "[AllIce in Wonderlands] departure on a winter adventure!",
    date: "12/28/2025",
    src: MUSIC_PATH + "AllIce in Wonderlands/departure on a winter adventure!.mp3",
  },
  {
    id: "allice-snowbossfight",
    title: "[AllIce in Wonderlands] snowbossfight",
    date: "12/29/2025",
    src: MUSIC_PATH + "AllIce in Wonderlands/snowbossfight.mp3",
  },
  {
    id: "allice-path-to-unknown",
    title: "[AllIce in Wonderlands] path to the unknown",
    date: "01/01/2026",
    src: MUSIC_PATH + "AllIce in Wonderlands/path to unknown.mp3",
  },
  {
    id: "allice-eternally-frozen-forest",
    title: "[AllIce in Wonderlands] 中世の魔女 ~ eternally frozen forest",
    date: "01/01/2026",
    src: MUSIC_PATH + "AllIce in Wonderlands/magician.mp3",
  },
];


export default function MusicEn() {
  return (
    <div>
      <h1>MUSIC ROOM</h1>
      <p>
        I leave some soundtracks here
      </p>

      <div className="vcontainer">
        {Soundtracks.map((soundtrack) => (
          <SoundtrackPlayer key={soundtrack.id}
            soundtrack={soundtrack}
          />
        ))}
      </div>
    </div>
  );
}

