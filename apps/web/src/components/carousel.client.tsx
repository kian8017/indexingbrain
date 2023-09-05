"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from "react";

const carouselOptions = {
  autoplay: true,
  autoplaySpeed: 3 * 1000,
};

export default function ClientCarousel({ pairs }: { pairs: ReactNode[] }) {
  return <Slider {...carouselOptions}>{pairs}</Slider>;
}