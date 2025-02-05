import styles from "./image.module.css";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  props?: any;
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
