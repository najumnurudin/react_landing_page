 import 'react-slideshow-image/dist/styles.css';
import image_1 from "../assets/images/1.jpg";
import image_2 from "../assets/images/2.jpg"; 
import image_3 from "../assets/images/3.jpg";


export default function Gallery() {
  const slideImages = [
    { url: image_1, caption: 'Explore the World' },
    { url: image_2, caption: 'Adventure Awaits' },
    { url: image_3, caption: 'Discover Nature' },
  ];


  return (
    <div className=" font-bold select-none p-2 lg:flex-row lg:flex">
        {slideImages.map((item, index) =>(
          <div className="" key={index}>
            <img
              src={item.url}
              alt={item.caption}
              className="lg:w-[40vh] w-[40vh] lg:h-[60vh] h-[40vh] object-cover rounded-lg mx-3 m-2"
            />
            <p className="text-white text-xs select-none text-center">{item.caption}</p>
          </div>
        ))}
    </div>
  );
}