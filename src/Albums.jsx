import { useState } from 'react'
import BandcampPlayer from './BandcampPlayer';

export default function Albums () {

	const [album, showAlbums] = useState(false)
	return (

		<>
    <div className="albumButtonWrapper">
		<button className="toggleButton" onClick = {() => showAlbums(!album)}>{album ? "Hide" : "View"} Discography</button>
      	<div className = "albumPlayer">
        	{album && (
          <div>
            <BandcampPlayer url="https://thedanelaw.bandcamp.com/album/blue-forty-six" artistName="Dane Law" albumName = "Blue Forty-Six" albumId="4027572572" ></BandcampPlayer>

            

          </div>
          )}
      </div>
      </div>
		</>

		)
}
