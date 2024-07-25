import { Wrapper } from './SplitContentSectionStyles';

import {
  SplitContentTextContainer,
  SplitContentImageContainer,
} from '../../containers';

const SplitContentSection = ({ istextfirst, ...textProps }) => {
  return (
    <Wrapper istextfirst={istextfirst} order={istextfirst ? '2' : '-1'}>
      {istextfirst ? (
        <>
          <SplitContentTextContainer {...textProps} istextfirst={istextfirst} />
          <SplitContentImageContainer imgUrl={textProps.imgUrl} imgAlt={textProps.title} />
        </>
      ) : (
        <>
          <SplitContentImageContainer imgUrl={textProps.imgUrl} imgAlt={textProps.title} />
          <SplitContentTextContainer {...textProps} istextfirst={istextfirst} />
        </>
      )}
    </Wrapper>
  );
};

export default SplitContentSection;
