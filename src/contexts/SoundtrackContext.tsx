import { useRef, useState, createContext, useContext } from 'react'

export type Soundtrack = {
  id: string
  title: string
  date: string
  src: string
}

type SoundtrackContextValue = {
  soundtrack: Soundtrack | null
  playing: boolean
  time: number

  changeSoundtrack: (newSoundtrack: Soundtrack) => void
  pause: () => void
  resume: () => void
  forwardTime: (timeInterval: number) => void // can take negative value to backward as well
}

export const SoundtrackContext = createContext<SoundtrackContextValue | null>(null);

export function SoundtrackProvider({ children }: { children: React.ReactNode }) {
  const [soundtrack, setSoundtrack] = useState<Soundtrack | null>(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)

  const audioRef = useRef<HTMLAudioElement>(null);

  function changeSoundtrack(newSoundtrack: Soundtrack) {
    const audio = audioRef.current;
    setSoundtrack(newSoundtrack);
    setTime(0);

    if (!audio) return;

    audio.src = newSoundtrack.src;
    audio.currentTime = 0;

    audio.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }

  function pause() {
    setPlaying(false);
  }

  function resume() {
    if (!soundtrack) { return; }
    setPlaying(true);
  }

  function forwardTime(timeInterval: number) {
    const audio = audioRef.current
    if (!audio) return;

    const nextTime = Math.min(
      audio.duration,
      Math.max(0, audio.currentTime + timeInterval)
    );

    audio.currentTime = nextTime;
    setTime(nextTime);
  }

  return (
    <SoundtrackContext.Provider

      value={{
        soundtrack,
        playing,
        time,
        changeSoundtrack,
        pause,
        resume,
        forwardTime,
      }}
    >
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {children}
    </SoundtrackContext.Provider>
  );
}

export function useSoundtrack() {
  const context = useContext(SoundtrackContext);
  if (!context) {
    throw new Error("useSoundtrack must be used inside SoundtrackProvider");
  }
  return context;
}
