import styled from 'styled-components'
import ReactDOM from 'react-dom'
import React from 'react'

const BlockGallery = styled.div`
  color: #b8b6dc;
  font-size: 22px;
  font-weight: bold;
  font-family: helvetica;
`
const GalleryContent = styled.div`
  color: #b8b6dc;
  font-size: 22px;
  font-weight: bold;
  font-family: helvetica;
`

function Gallery(props) {
  return (
    <div>
      <BlockGallery>
        <GalleryContent>{}</GalleryContent>
      </BlockGallery>
    </div>
  )
}
export default Gallery
