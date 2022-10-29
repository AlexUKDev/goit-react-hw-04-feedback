import { Title, Wrap } from './Section.Styled';

const Section = ({ title, children }) => (
  <Wrap>
    <Title>{title}</Title>
    {children}
  </Wrap>
);

export default Section;
