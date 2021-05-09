import React, {useState, useEffect, memo} from 'react'
import {Video, CloudinaryContext} from 'cloudinary-react'

const PdtVideo = memo(({publicId}) => {
  return (
    <CloudinaryContext cloudName="codeg0d">
      <Video
        publicId={publicId}
        controls
        width="100%"
        sourceTransformation={{
          ogv: {
            aspect_ratio: '3:2',
          },
          webm: {
            aspectRatio: '1:1',
          },
        }}
        sourceTypes={['webm', 'ogv', 'mp4']}
      />
    </CloudinaryContext>
  )
})

const ProductVideo = ({video = 'video-ecommerce/tomato'}) => {
  const [player, setPlayer] = useState('')
  useEffect(() => {
    setPlayer(video)
  }, [video])
  return (
    <div>
      <PdtVideo publicId={player} />
    </div>
  )
}

export default ProductVideo
