import Image from "next/image";

import classes from "./SplitContentImageContainer.module.scss";

type SplitContentImageContainerProps = {
  imgUrl: string;
  imgAlt: string;
};

/**
 * Renders a container component that displays an image with responsive layout.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.imgUrl - The URL of the image.
 * @param {string} props.imgAlt - The alt text for the image.
 * @returns {JSX.Element} The rendered SplitContentImageContainer component.
 */

function SplitContentImageContainer({
  imgUrl,
  imgAlt,
}: SplitContentImageContainerProps): JSX.Element {
  return (
    <div className={classes.imgContainer} style={{ position: "relative" }}>
      <Image
        src={imgUrl}
        alt={imgAlt}
        width={900}
        height={600}
        layout="responsive"
      />
    </div>
  );
}

export default SplitContentImageContainer;
