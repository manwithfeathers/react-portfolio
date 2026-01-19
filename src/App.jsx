import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [album, showAlbums] = useState(false)
  const [about, showAbout] = useState(false)

  return (
    <>
      <div>
        <button onClick ={ () => showAbout(!about)}> {!about ? "About Me" : "Hide"} </button>
        {about && (
          <p>
            I'm a coder and musician. You can see some of my projects here.
          </p>
          )}
      </div>
      <button onClick = {() => showAlbums(!album)}>{album ? "Hide" : "View"} Discography</button>
      <div>
        {album && (
          <div>
            <iframe 
              style= {{ border: "0", width: "100%", height: "120px"}} 
              src="https://bandcamp.com/EmbeddedPlayer/album=274195578/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" 
              seamless>
              <a 
                href="https://thedanelaw.bandcamp.com/album/the-black-path">The Black Path by Dane Law
              </a>
            </iframe>

            <iframe 
              style= {{ border: "0", width: "100%", height: "120px"}} 
              src="https://bandcamp.com/EmbeddedPlayer/album=4027572572/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" 
              seamless>
             <a href="https://thedanelaw.bandcamp.com/album/blue-forty-six">Blue Forty-Six by Dane Law
             </a>
            </iframe>

            <iframe 
              style={{ border: "0", width: "100%", height: "120px"}} 
              src="https://bandcamp.com/EmbeddedPlayer/album=269748602/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" 
              seamless>
              <a href="https://thedanelaw.bandcamp.com/album/algorithmic-music-for-synthesised-strings">Algorithmic Music for Synthesised Strings by Dane Law
                </a>
            </iframe>

          </div>
          )}
      </div>
      
    </>
  )
}

export default App
