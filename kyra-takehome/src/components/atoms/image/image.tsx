import { ImgHTMLAttributes } from "react";
import styles from "./image.module.css";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  props?: ImgHTMLAttributes<HTMLImageElement>;
}

export default function Image({
  src,
  alt,
  width,
  height,
  ...props
}: ImageProps) {
  return (
    <img
      className={styles.circle}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
}
