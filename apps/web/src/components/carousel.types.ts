export type CarouselImage = {
  url: string;
  height: number;
  width: number;
};

export type CarouselPair = {
  id: string;
  handwritten: CarouselImage;
  typed: CarouselImage;
};
