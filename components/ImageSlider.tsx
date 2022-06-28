import Image from 'next/image';
import { useEffect, useState } from 'react';
import { shimmerUrl } from './blur-image';

interface Props {
  images: string[];
  width: number;
}

export default function ImageSlider({ images, width }: Props) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timeout = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 1000);
    return () => {
      clearInterval(timeout);
    }
  }, [images.length]);
  return <Image src={images[index]} layout="responsive" width={width} height={width} alt="nekos" placeholder="blur" blurDataURL={shimmerUrl}/>
}
