import React from 'react'
import './ImageSlideshow.css'
import alumniInteraction from '../../../assets/alumniInteraction.jpg'
import linkedInWorkshop from '../../../assets/linkedInWorkshop.jpg'
import speakoff from '../../../assets/speakoff.png'
import vichaarSangam from '../../../assets/vichaarSangam.jpg'


const ImageSlideshow = () => {
    const images = [
        { src: alumniInteraction, alt: "Alumni interaction" },
        { src: linkedInWorkshop, alt: "LinkedIn workshop" },
        { src: speakoff, alt: "Speak-off event" },
        { src: vichaarSangam, alt: "Vichaar Sangam event" },
    ];
    const styles = {
        base : {
            height: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        imagePlaceholder :{
            margin: "20px",
            borderRadius: "10px",
            height : "300px",
            width: "200px",
            // border: "2px solid #fff"
        }
    }
    const renderImageGroup = (groupIndex) => (
        <div className="image-slideshow__group" aria-hidden={groupIndex === 1}>
            {images.map((image) => (
                <img
                    key={`${image.alt}-${groupIndex}`}
                    style={styles.imagePlaceholder}
                    className="image-slideshow__placeholder"
                    src={image.src}
                    alt={groupIndex === 1 ? "" : image.alt}
                />
            ))}
        </div>
    );
  return (
    <div className="image-slideshow">
        <div style={styles.base} className="image-slideshow__track">
            {renderImageGroup(0)}
            {renderImageGroup(1)}
        </div>
    </div>
  )
}

export default ImageSlideshow