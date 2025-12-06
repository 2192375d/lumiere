import { useState } from 'react'

export default function Space() {

  const [value, setValue] = useState(0)

  return (
    <>
      <h1>SPACE</h1>
      I don't know how you managed to find this page. It's currently not complete but yeah congrats.
      <br />
      This is the page where I add random stuffs
      <br />
      Here is a button
      <br />
      <button onClick={() => setValue(value + 1)}>
        {value}
      </button>
      <button onClick={() => setValue(0)}>
        reset
      </button>
    </>
  )
}
