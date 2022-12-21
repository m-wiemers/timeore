import { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';

type Props = {
  children: ReactNode;
};

const StyledCard = styled.View`
  border-color: ${Colors.borderColor};
  border-width: 2px;
  border-radius: 10px;
  padding: 10px;
`;

const Card = ({ children }: Props): JSX.Element => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
