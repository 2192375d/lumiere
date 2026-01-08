import { useState, useContext, createContext } from "react";

export type Soundtrack = {
  title: string
  src: string
  date: string
  duration: number
}

type SoundtrackContextValue = {
  soundtrack: Soundtrack;
  setSoundtrack: (soundtrack: Soundtrack) => void

  playing: boolean
  togglePlay: () => void
  resume: () => void
  pause: () => void

  currentTime: number
  seekBy: (time: number) => void
}

export const EMPTY_SOUNDTRACK: Soundtrack = {
  title: "",
  src: "",
  date: "",
  duration: 0,
};

const SoundtrackContext = createContext<SoundtrackContextValue>({
  soundtrack: EMPTY_SOUNDTRACK,

  setSoundtrack: () => { },

  playing: false,
  togglePlay: () => { },
  resume: () => { },
  pause: () => { },

  currentTime: 0,
  seekBy: () => { },
});

export function SoundtrackProvider({ children }: { children: React.ReactNode }) {
  const [soundtrack, setSoundtrack] = useState<Soundtrack>(EMPTY_SOUNDTRACK);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  function resume() {
    setPlaying(true)
  }

  function pause() {
    setPlaying(false)
  }

  function togglePlay() {
    setPlaying(playing => !playing)
  }

  function seekBy(time: number) {
    setCurrentTime(currentTime => currentTime + time)
  }

  return (
    <SoundtrackContext.Provider value={{
      soundtrack,
      setSoundtrack,
      playing,
      togglePlay,
      resume,
      pause,
      currentTime,
      seekBy,

    }}>
      {children}
    </SoundtrackContext.Provider>
  );
}

export function useSoundtrack(): SoundtrackContextValue {
  return useContext(SoundtrackContext);
}
