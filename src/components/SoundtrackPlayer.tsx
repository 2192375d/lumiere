
import { useRef } from 'react'
import { useSoundtrack, type Soundtrack } from "@contexts/SoundtrackContext";

type Props = { soundtrack: Soundtrack };

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function SoundtrackPlayer({ soundtrack }: Props) {
  const {
    soundtrack: current,
    playing,
    time,
    duration,
    changeSoundtrack,
    pause,
    resume,
    restart,
    seekTo,
  } = useSoundtrack();

  const isCurrent = current?.id === soundtrack.id;
  const playPauseIcon = isCurrent && playing ? "❚❚" : "▶";
  const barRef = useRef<HTMLDivElement>(null);

  function onToggle() {
    if (!isCurrent) {
      changeSoundtrack(soundtrack);
      return;
    }

    if (playing) pause();
    else resume();
  }

  function onSeek(e: React.MouseEvent<HTMLDivElement>) {
    if (!isCurrent || shownDuration === 0) return;

    const bar = barRef.current;
    if (!bar) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = clickX / rect.width;

    seekTo(ratio * shownDuration);
  }

  const shownTime = isCurrent ? time : 0;
  const shownDuration = isCurrent ? duration : 0;

  function onRestartFromBeginning() {
    if (!isCurrent) {
      changeSoundtrack(soundtrack);
      return;
    }
    restart();
  }

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        background: "var(--color-post-background)",
        border: "1px solid var(--color-border-color)",
        borderRadius: "14px",
      }}
    >
      <div className="vcontainer" style={{ gap: "7px" }}>
        {soundtrack.title}
        <br />
        written on {soundtrack.date}

        <div className="vcontainer" style={{ gap: "2px" }}>
          <div className="hcontainer">
            <button onClick={onRestartFromBeginning}>|▶</button>
            <button onClick={onToggle}>{playPauseIcon}</button>
          </div>

          <div style={{ marginTop: "0px" }}>

            <div
              ref={barRef}
              onClick={onSeek}
              style={{
                cursor: "pointer",
                width: "320px",        // ✅ match the progress width
                display: "inline-block" // ✅ prevent it from stretching full width
              }}
            >
              <progress
                value={shownTime}
                max={shownDuration || 1}
                style={{ width: "100%", pointerEvents: "none", display: "block" }} // ✅ fill wrapper
              />
            </div>

            <div style={{ fontSize: "0.9em", opacity: 0.8 }}>
              {formatTime(shownTime)} / {formatTime(shownDuration)}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

