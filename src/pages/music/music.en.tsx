
import SoundtrackPlayer from "@components/SoundtrackPlayer";
import type { Soundtrack } from "@contexts/SoundtrackContext";

// Put your mp3 files somewhere like:
// public/assets/music/grasswalk.mp3
// public/assets/music/loonboon.mp3
const tracks: Soundtrack[] = [
  {
    title: "Grasswalk",
    src: "/assets/music/grasswalk.mp3",
    date: "2009",
    duration: 180,
  },
  {
    title: "Loonboon",
    src: "/assets/music/loonboon.mp3",
    date: "2009",
    duration: 165,
  },
  // add more...
];

export default function MusicEn() {
  return (
    <>
      <h1>MUSIC ROOM</h1>
      I leave some soundtracks here
      <br />

      <div className="vcontainer">
        {tracks.map((t) => (
          <SoundtrackPlayer key={t.src} track={t} />
        ))}
      </div>
    </>
  );
}

