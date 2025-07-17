import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import image_1 from "../assets/career/1.jpg";
import image_2 from "../assets/career/2.jpg"; 
import image_3 from "../assets/career/3.jpg";
import image_4 from "../assets/tech/1.jpg";
import image_5 from "../assets/tech/2.jpg";
import image_6 from "../assets/tech/2.jpg";

const slideImages = [
  { url: image_1, caption: 'Explore the World' },
  { url: image_2, caption: 'Adventure Awaits' },
  { url: image_3, caption: 'Discover Nature' },
  { url: image_4, caption: 'Urban Escapes' },
  { url: image_5, caption: 'Relax and Recharge' },
  { url: image_6, caption: 'Hidden Gems' },
];

export default function Carousel() {
  return (
    <div className="w-[50vh]  max-w-4xl mx-auto rounded-lg shadow-lg lg:overflow-hidden overflow-scroll bg-transparent">
      <Slide easing="ease" duration={2000} transitionDuration={800} autoplay>
        {slideImages.map((slide, index) => (
          <div key={index} className="relative w-full h-[400px]">
            <div
              className="w-full h-full bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.url})` }}
            >
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
