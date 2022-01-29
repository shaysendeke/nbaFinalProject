import React from 'react';

export default function Tickets({selectedGame}) {
  console.log(selectedGame)
  return (
  <div>
{selectedGame.title}
<h4>{selectedGame.title}</h4>
        <h6>{selectedGame.datetime_local}</h6>
        <h6>{selectedGame.venue.name}</h6>
        <h6>{selectedGame.venue.display_location}</h6>
        
  </div>
  )
}
