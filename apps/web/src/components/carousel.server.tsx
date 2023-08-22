/*
import Image from "next/image";
import ClientCarousel from "./carousel.client";
import request from "./payload";

export default async function Carousel() {
  const resp = await request("/api/carousel-pairs", undefined, "GET");

  const pairs = resp.docs.map((d: any) => {
    return (
      <div key={d.id}>
        <div>
          <h2>Turn this:</h2>
          <Image
            height={d.handwrittenImage.height}
            width={d.handwrittenImage.width}
            src={d.handwrittenImage.url}
            alt="handwriting example"
          />
          <div className="py-2" />
          <h2>Into this:</h2>
          <Image
            height={d.typedImage.height}
            width={d.typedImage.width}
            src={d.typedImage.url}
            alt="transcription of prior handwriting example"
          />
        </div>
      </div>
    );
  });

  return (
    <div className="bg-base-300 max-w-lg text-center">
      <p>For example:</p>
      <ClientCarousel pairs={pairs} />
    </div>
  );
}
*/
