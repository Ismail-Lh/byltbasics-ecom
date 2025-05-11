import classes from "./SplitContentText.module.scss";

type SplitContentTextProps = {
  title: string;
  text: string;
};

/**
 * Renders a component that displays a title and text in a split content layout.
 *
 * @param {SplitContentTextProps} props - The props for the SplitContentText component.
 * @param {string} props.title - The title to be displayed.
 * @param {string} props.text - The text to be displayed.
 * @returns {JSX.Element} The rendered SplitContentText component.
 */

function SplitContentText({ title, text }: SplitContentTextProps) {
  return (
    <div>
      <h2 className={classes.split__content_title}>{title}</h2>
      <p className={classes.split__content_text}>{text}</p>
    </div>
  );
}

export default SplitContentText;
