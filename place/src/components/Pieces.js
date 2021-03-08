import React, { useState, useCallback, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos } from "./Photos";
import { SRLWrapper } from "simple-react-lightbox";
function Pieces() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   const openLightbox = useCallback((event, { photo, index }) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);
    // const openLightbox = useEffect((photos, index)=>{
    // setCurrentImage(index);
    // setViewerIsOpen(true);
    // }, [])

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

  return (
    <div>
      <h2>Pieces of Places</h2>
      <SRLWrapper>
      <Gallery photos={photos} 
      //onClick={openLightbox} 
      />
      </SRLWrapper>
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </div>
  );
}

export default Pieces;