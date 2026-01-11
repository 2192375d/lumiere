import { useSoundtrack, type Soundtrack } from '@contexts/SoundtrackContext';

type Props = { soundtrack: Soundtrack }

export default function SoundtrackPlayer({ soundtrack }: Props) {
  const { changeSoundtrack, resume } = useSoundtrack();

  return (
    <div style={{
      display: "flex",
      padding: "20px",
      background: "var(--color-post-background)",
      border: "1px solid var(--color-border-color)",
      borderRadius: "14px",
    }}>

      <div className="vcontainer">
        {soundtrack.title}
        <br />
        written on {soundtrack.date}

        <div className="hcontainer">
          <button onClick={() => { changeSoundtrack(soundtrack) }
          }>▶</button>
          <button onClick={() => { resume() }
          }>❚❚</button>
        </div>

      </div>
    </div>
  )
}
