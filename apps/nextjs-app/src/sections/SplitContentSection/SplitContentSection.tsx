import SplitContentImageContainer from "../../containers/SplitContentImageContainer/SplitContentImageContainer";
import SplitContentTextContainer from "../../containers/SplitContentTextContainer/SplitContentTextContainer";
import { Wrapper } from "./SplitContentSectionStyles";

/**
 * Renders a split content section with text and image containers.
 * @param {boolean} istextfirst - Determines whether the text container should appear before the image container.
 * @param {object} textProps - Props to be passed to the text container.
 * @returns {JSX.Element} The rendered split content section.
 */

type SplitContentSectionProps = {
  istextfirst: boolean;
  title: string;
  subtitle: string;
  description: string;
  imgUrl: string;
  text: string;
  route: string;
};

function SplitContentSection({
  istextfirst,
  ...textProps
}: SplitContentSectionProps): JSX.Element {
  return (
    <Wrapper istextfirst={istextfirst} order={istextfirst ? "2" : "-1"}>
      {istextfirst
        ? (
            <>
              <SplitContentTextContainer
                route={textProps.route}
                text={textProps.text}
                title={textProps.title}
                istextfirst={istextfirst}
              />
              <SplitContentImageContainer
                imgUrl={textProps.imgUrl}
                imgAlt={textProps.title}
              />
            </>
          )
        : (
            <>
              <SplitContentImageContainer
                imgUrl={textProps.imgUrl}
                imgAlt={textProps.title}
              />
              <SplitContentTextContainer {...textProps} istextfirst={istextfirst} />
            </>
          )}
    </Wrapper>
  );
}

export default SplitContentSection;
