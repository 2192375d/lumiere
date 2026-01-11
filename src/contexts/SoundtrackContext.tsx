
import React, { useRef, useState, createContext, useContext } from "react";

export type Soundtrack = {
  id: string;
  title: string;
  date: string;
  src: string;
};

type SoundtrackContextValue = {
  soundtrack: Soundtrack | null;
  time: number;
  duration: number;
  playing: boolean;

  changeSoundtrack: (newSoundtrack: Soundtrack) => void;
  pause: () => void;
  resume: () => void;
  forwardTime: (timeInterval: number) => void;
  restart: () => void;
  seekTo: (newTime: number) => void;
};

export const SoundtrackContext = createContext<SoundtrackContextValue | null>(null);

export function SoundtrackProvider({ children }: { children: React.ReactNode }) {
  const [soundtrack, setSoundtrack] = useState<Soundtrack | null>(null);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  function changeSoundtrack(newSoundtrack: Soundtrack) {
    const audio = audioRef.current;

    setSoundtrack(newSoundtrack);
    setTime(0);
    setDuration(0);

    if (!audio) return;

    audio.src = newSoundtrack.src;
    audio.currentTime = 0;
    audio.load();

    audio.play().catch(() => { });
  }

  function pause() {
    audioRef.current?.pause();
  }

  function resume() {
    const audio = audioRef.current;
    if (!audio || !soundtrack) return;

    audio.play().catch(() => { });
  }

  function restart() {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    setTime(0);

    if (!audio.paused) {
      audio.play().catch(() => { });
    }
  }

  function forwardTime(timeInterval: number) {
    const audio = audioRef.current;
    if (!audio) return;

    if (Number.isNaN(audio.duration)) return;

    const nextTime = Math.min(
      audio.duration,
      Math.max(0, audio.currentTime + timeInterval)
    );

    audio.currentTime = nextTime;
    setTime(nextTime);
  }

  function seekTo(newTime: number) {
    const audio = audioRef.current;
    if (!audio) return;
    if (Number.isNaN(audio.duration)) return;

    const clamped = Math.min(audio.duration, Math.max(0, newTime));
    audio.currentTime = clamped;
    setTime(clamped);
  }

  return (
    <SoundtrackContext.Provider
      value={{
        soundtrack,
        time,
        duration,
        playing,
        changeSoundtrack,
        pause,
        resume,
        forwardTime,
        restart,
        seekTo,
      }}
    >
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration || 0)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {children}
    </SoundtrackContext.Provider>
  );
}

export function useSoundtrack() {
  const context = useContext(SoundtrackContext);
  if (!context) throw new Error("useSoundtrack must be used inside SoundtrackProvider");
  return context;
}
