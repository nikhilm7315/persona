import React, { useEffect, useState } from 'react'
import './ImageSlideShow.css'

// Event gallery images from EventImages/SlideshowAnimation and EventImages
import vicharSangam1 from '../../../assets/EventImages/SlideshowAnimation/VicharSangamOne1.jpg'
import speakOff1 from '../../../assets/EventImages/SlideshowAnimation/SpeakOff1.jpg'
import laCasa1 from '../../../assets/EventImages/SlideshowAnimation/LaCasaDeDiscussions1.jpg'
import vicharSangam2 from '../../../assets/EventImages/SlideshowAnimation/VicharSangamOne2.jpg'
import speakOff2 from '../../../assets/EventImages/SlideshowAnimation/SpeakOff2.jpg'
import laCasa2 from '../../../assets/EventImages/SlideshowAnimation/LaCasaDeDiscussions2.jpg'
import vicharSangam3 from '../../../assets/EventImages/SlideshowAnimation/VicharSangamOne3.jpg'
import speakOff3 from '../../../assets/EventImages/SlideshowAnimation/SpeakOff3.jpg'
import laCasa3 from '../../../assets/EventImages/SlideshowAnimation/LaCasaDeDiscussions3.jpg'
import vicharSangam4 from '../../../assets/EventImages/SlideshowAnimation/VicharSangamOne4.jpg'
import speakOff4 from '../../../assets/EventImages/SlideshowAnimation/SpeakOff4.jpg'
import laCasa4 from '../../../assets/EventImages/SlideshowAnimation/LaCasaDeDiscussions4.jpg'
import vicharSangam5 from '../../../assets/EventImages/SlideshowAnimation/VicharSangamOne5.jpg'
import laCasa5 from '../../../assets/EventImages/SlideshowAnimation/LaCasaDeDiscussions5.jpg'
import vicharSangamTwo1 from '../../../assets/EventImages/VicharSangamTwo1.jpg'

const BASE_IMAGES = [
  { src: vicharSangam1, alt: "Vichar Sangam session" },
  { src: speakOff1, alt: "Speak Off competition" },
  { src: laCasa1, alt: "La Casa De Discussions round" },
  { src: vicharSangam2, alt: "Vichar Sangam discussion" },
  { src: speakOff2, alt: "Speak Off stage" },
  { src: laCasa2, alt: "La Casa De Discussions debate" },
  { src: vicharSangam3, alt: "Vichar Sangam participants" },
  { src: speakOff3, alt: "Speak Off audience & judges" },
  { src: laCasa3, alt: "La Casa De Discussions finalists" },
  { src: vicharSangam4, alt: "Vichar Sangam presentation" },
  { src: speakOff4, alt: "Speak Off speech round" },
  { src: laCasa4, alt: "La Casa De Discussions team" },
  { src: vicharSangam5, alt: "Vichar Sangam group" },
  { src: laCasa5, alt: "La Casa De Discussions session" },
  { src: vicharSangamTwo1, alt: "Vichar Sangam 2.0" },
]

const ImageSlideshow = () => {
  const [imagesReady, setImagesReady] = useState(false)

  useEffect(() => {
    // Eagerly preload and decode images in memory for immediate display
    let loadedCount = 0
    const total = BASE_IMAGES.length

    BASE_IMAGES.forEach((item) => {
      const img = new Image()
      img.src = item.src
      img.onload = img.onerror = () => {
        loadedCount++
        if (loadedCount >= total) {
          setImagesReady(true)
        }
      }
    })
  }, [])

  const renderGroup = (groupIdx) => (
    <div className="image-slideshow__group" aria-hidden={groupIdx > 0}>
      {BASE_IMAGES.map((image, idx) => (
        <div key={`${groupIdx}-${idx}`} className="image-slideshow__item-wrapper">
          <img
            className="image-slideshow__img"
            src={image.src}
            alt={groupIdx === 0 ? image.alt : ""}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={220}
            height={320}
          />
        </div>
      ))}
    </div>
  )

  return (
    <section className="image-slideshow-container" aria-label="Event Highlights Gallery">
      <div className={`image-slideshow ${imagesReady ? 'is-ready' : 'is-loading'}`}>
        <div className="image-slideshow__track">
          {renderGroup(0)}
          {renderGroup(1)}
        </div>
      </div>
    </section>
  )
}

export default ImageSlideshow