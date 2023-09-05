import { carouselProvider } from "@/backend/providers";
import Image from "next/image";
import ClientCarousel from "./carousel.client";

export default async function Carousel() {
  const slides = await carouselProvider.getSlides();

  const slideElements = slides.map((curSlide) => {
    return (
      <div key={curSlide.nickname}>
        <div>
          <h2>Turn this:</h2>
          <Image
            height={curSlide.handwritten.height}
            width={curSlide.handwritten.width}
            src={curSlide.handwritten.url}
            alt="handwriting example"
          />
          <div className="py-2" />
          <h2>Into this:</h2>
          <Image
            height={curSlide.typed.height}
            width={curSlide.typed.width}
            src={curSlide.typed.url}
            alt="transcription of prior handwriting example"
          />
        </div>
      </div>
    );
  });

  return (
    <div className="bg-base-300 max-w-lg text-center">
      <p>For example:</p>
      <ClientCarousel pairs={slideElements} />
    </div>
  );
}