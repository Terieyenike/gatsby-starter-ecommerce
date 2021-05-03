import React, {useState, useEffect, memo} from 'react'
import {useInView} from 'react-intersection-observer'
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
  const {ref, inView} = useInView({threshold: 0})
  useEffect(() => {
    if (inView === true) {
      setPlayer(video)
    }
  }, [inView, video])
  return (
    <div ref={ref}>
      <PdtVideo publicId={player} />
    </div>
  )
}

export default ProductVideo
