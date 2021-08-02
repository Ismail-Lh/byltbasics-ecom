import { Wrapper } from './SplitContentSectionStyles';

const SplitContentSection = ({ isTextFirst, children, order }) => {
  return (
    <Wrapper isTextFirst={isTextFirst} order={order}>
      {children}
    </Wrapper>
  );
};

export default SplitContentSection;
