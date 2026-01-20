export default function BandcampPlayer({albumId, url, albumName, artistName}) {
    return (
        <>
        <div className="albumPlayer">
        <iframe 
              style= {{ border: "0", width: "100%", height: "120px"}} 
              src= {`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/`} 
              seamless>
              <a 
                href={url}>{`${albumName} by ${artistName}`}
              </a>
            </iframe>
        </div>
        </>
    )
}