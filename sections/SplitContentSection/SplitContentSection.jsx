import { Wrapper } from './SplitContentSectionStyles';

import {
  SplitContentTextContainer,
  SplitContentImageContainer,
} from '../../containers';

const SplitContentSection = ({ isTextFirst, ...textProps }) => {
  return (
    <Wrapper isTextFirst={isTextFirst} order={isTextFirst ? '2' : '-1'}>
      {isTextFirst ? (
        <>
          <SplitContentTextContainer {...textProps} isTextFirst />
          <SplitContentImageContainer imgUrl={textProps.imgUrl} imgAlt={textProps.title} />
        </>
      ) : (
        <>
          <SplitContentImageContainer imgUrl={textProps.imgUrl} imgAlt={textProps.title} />
          <SplitContentTextContainer {...textProps} isTextFirst={false} />
        </>
      )}
    </Wrapper>
  );
};

export default SplitContentSection;
