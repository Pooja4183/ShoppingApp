import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'https://demo.themefreesia.com/idyllic-fashion/wp-content/uploads/sites/23/2017/08/slider-image-7.jpg',
  },
  {
    url: 'https://www.kimirica.shop/cdn/shop/files/Almond-Oil-Skin-care-Page-Inner-Banner--01.jpg?v=1715765156&width=1920',
  },
  {
    url: 'https://cdn.canvaschamp.in/static/images/landingpage/interiordecoration/corporate_art_banner.jpg',
  },
];

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '420px', // Similar to Myntra banner height
  width: '100%',
};

const Slideshow = () => {
  return (
    <div className="slide-container" style={{ width: '100%' }}>
      <Slide
        duration={2500}          // Time each slide is shown
        transitionDuration={500} // Slide animation duration
        infinite={true}          // Enables looping 
        indicators={false}       // Optional: hide/show dots
        arrows={true}            // Show left/right arrows
        autoplay={true}          // Auto-play slides
        pauseOnHover={true}      // Pause on mouse hover
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
