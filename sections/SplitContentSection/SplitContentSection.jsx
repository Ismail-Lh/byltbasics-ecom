import { Wrapper } from './SplitContentSectionStyles';

const SplitContentSection = ({ isTextFirst, children }) => {
  return <Wrapper isTextFirst={isTextFirst}>{children}</Wrapper>;
};

export default SplitContentSection;
