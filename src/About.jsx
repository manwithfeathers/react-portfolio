import { useState } from 'react'

export default function About () {
	const [about, showAbout] = useState(false)
	return (

		<div>
        	<button className="toggleButton" onClick ={ () => showAbout(!about)}> {!about ? "About Me" : "Hide"} </button>
        	{about && (
          	<p>
            I'm a coder and musician. You can see some of my projects here.
          	</p>
          	)}
      	</div>
		)
  }