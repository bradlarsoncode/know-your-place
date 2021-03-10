import React from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from "./Photos";
import { SRLWrapper } from "simple-react-lightbox-pro";
import './Place.css'
const customCaptions = [
  { id: 0, caption: "I wanted to make this in order to fullfill my desire to reach out to others" },
  { id: 1, caption: "captionTwo" },
  { id: 2, caption: "captionThree" },
   { id: 3, caption: "captionf" },
  { id: 4, caption: "captionfive" },
  { id: 5, caption: "captionsix" },
   { id: 6, caption: "caption7" }
]
function Pieces() {
  console.log(photos[1].id)
  return (
    <div className='piecesbg'>
      {/* <h2>Pieces of Places</h2> */}
   
      <div className='pieces'>
       
      
        <SRLWrapper customCaptions={customCaptions}>
            <Gallery photos={photos} />
        </SRLWrapper> 
      </div>
    </div>
  );
}

export default Pieces;