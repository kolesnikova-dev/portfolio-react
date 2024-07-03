import React from 'react'

const ImageContainer = ({thisClass, src, alt}) => {
  return (
    <div className={thisClass}>
        <img src={src} alt={alt} />
    </div>
  )
}

export default ImageContainer;