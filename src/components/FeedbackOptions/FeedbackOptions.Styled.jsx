import styled from 'styled-components';
// color btn from rozetka #479e50  hover: #54b95f

export const FeedbackList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px 30px 0px;
`;

export const FeedbackItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const FeedbackBtn = styled.button`
  font-family: sans-serif;
  font-weight: 700;

  width: 100px;
  padding: 15px 30px;
  background-color: #479e50;
  color: white;

  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #54b95f;
    scale: 0.99;
  }
`;
