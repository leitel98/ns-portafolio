import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

interface CarouselProps extends EmblaOptionsType {
  slidesToShow?: number;
}

const Carousel = ({ children, slidesToShow = 1, ...options }: PropsWithChildren<CarouselProps>) => {
  const emblaOptions = {
    ...options,
    slidesToShow,
  } as EmblaOptionsType;
  
  const [emblaRef] = useEmblaCarousel(emblaOptions);

  return (
    <div className="" ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  );
};

export default Carousel;
