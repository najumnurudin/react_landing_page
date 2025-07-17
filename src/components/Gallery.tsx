 import 'react-slideshow-image/dist/styles.css';
import image_1 from "../assets/images/1.jpg";
import image_2 from "../assets/images/2.jpg"; 
import image_3 from "../assets/images/3.jpg";
import image_4 from "../assets/images/4.jpg";
import image_5 from "../assets/images/5.jpg";
import image_6 from "../assets/images/6.jpg";


export default function Gallery() {
  const slideImages = [
    { url: image_1, caption: 'Explore the World' },
    { url: image_2, caption: 'Adventure Awaits' },
    { url: image_3, caption: 'Discover Nature' },
    // { url: image_4, caption: 'Urban Escapes' },
    // { url: image_5, caption: 'Relax and Recharge' },
    // { url: image_6, caption: 'Hidden Gems' },
  ];


  return (
    <div className="bg-black p-2 flex">
        {slideImages.map((index) =>(
          <div className="" key={index}>
            <img
              src={index.url}
              alt={index.caption}
              className="w-[200px] h-[300px] object-cover rounded-lg mx-3 m-2"
            />
            <p className="text-white text-xs select-none text-center">{index.caption}</p>
          </div>
        ))}
    </div>
  );
}