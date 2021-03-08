import React from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from "./Photos";
import { SRLWrapper } from "simple-react-lightbox";
function Pieces() {
  return (
    <div>
      <h2>Pieces of Places</h2>
        <SRLWrapper>
            <Gallery photos={photos} />
        </SRLWrapper>
    </div>
  );
}

export default Pieces;