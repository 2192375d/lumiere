
// src/components/SoundtrackPlayer.tsx
import { useSoundtrack } from "@contexts/SoundtrackContext";
import type { Soundtrack } from "@contexts/SoundtrackContext";

type Props = {
  // If provided: this player represents THAT track (used in the Music page list)
  // If omitted: this player represents the GLOBAL currently-selected track (used for floating player)
  track?: Soundtrack;
};

export default function SoundtrackPlayer({ track }: Props) {
  const {
    soundtrack,
    setSoundtrack,
    playing,
    togglePlay,
    resume,
    currentTime,
    seekBy,
  } = useSoundtrack();

  // What this instance should display (row track vs global track)
  const displayTrack = track ?? soundtrack;

  // "empty soundtrack" check
  const hasTrack = displayTrack.src !== "";

  // If this is a row player, it's "active" only when it matches the global soundtrack
  const isActive = track ? soundtrack.src === track.src : hasTrack;

  const shownPlaying = isActive ? playing : false;
  const shownTime = isActive ? currentTime : 0;

  const duration = displayTrack.duration > 0 ? displayTrack.duration : 1;

  function selectThisTrackAndPlay() {
    if (!track) return;

    // Switch global track to this one
    setSoundtrack(track);

    // Reset time to 0 (state-only approach)
    if (currentTime !== 0) {
      seekBy(-currentTime);
    }

    // Start playing
    resume();
  }

  function onPlayPause() {
    if (!hasTrack) return;

    // If this is a row player and it's not active, selecting it should start playback
    if (track && !isActive) {
      selectThisTrackAndPlay();
      return;
    }

    // Otherwise toggle current playback
    togglePlay();
  }

  function onSeek(delta: number) {
    if (!isActive) return;
    seekBy(delta);
  }

  function onSeekTo(newTime: number) {
    if (!isActive) return;
    // We don't have seekTo in your context, so convert "seekTo" into seekBy:
    seekBy(newTime - currentTime);
  }

  return (
    <div className="soundtrackPlayer">
      <div className="soundtrackTitle">
        {hasTrack ? displayTrack.title : "No track selected"}
      </div>

      {/* progress bar */}
      <input
        type="range"
        min={0}
        max={duration}
        value={Math.min(shownTime, duration)}
        disabled={!isActive}
        onChange={(e) => onSeekTo(Number(e.target.value))}
      />

      {/* controls: left 10s, pause/play, right 10s */}
      <div className="soundtrackControls">
        <button disabled={!isActive} onClick={() => onSeek(-10)}>
          ⏪ 10s
        </button>

        <button disabled={!hasTrack} onClick={onPlayPause}>
          {shownPlaying ? "⏸" : "▶"}
        </button>

        <button disabled={!isActive} onClick={() => onSeek(10)}>
          10s ⏩
        </button>
      </div>
    </div>
  );
}

