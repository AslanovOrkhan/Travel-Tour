 import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface TourSliderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const images = [
  {
    src: "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=",
  },
  {
    src: "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=",
  },
  {
    src: "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=",
  },
  {
    src: "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=",
  },
];

const TourSlider: React.FC<TourSliderProps> = ({ open, setOpen }) => {
  const [thumbPosition, setThumbPosition] = useState<"bottom" | "end">("end");

  useEffect(() => {
    const updatePosition = () => {
      if (window.innerWidth < 768) {
        setThumbPosition("bottom"); // mobil görünüşdə aşağıda
      } else {
        setThumbPosition("end"); // desktop görünüşdə sağda
      }
    };

    updatePosition(); // ilk render
    window.addEventListener("resize", updatePosition); // pəncərə ölçüsü dəyişdikcə yenilə

    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      index={0}
      slides={images}
      plugins={[Thumbnails, Zoom, Fullscreen]}
      thumbnails={{ position: thumbPosition }}
    />
  );
};

export default TourSlider;
