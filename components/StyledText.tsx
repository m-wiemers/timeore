import { ReactNode } from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';

type Props = {
  type?: 'headline' | 'label';
  children: ReactNode;
  style?: TextStyle;
  viewStyle?: ViewStyle;
};

const Headline = styled.Text<Partial<Props>>`
  color: ${Colors.textColor};
  font-size: ${({ type }) =>
    type == 'headline' ? '30px' : type == 'label' ? '12px' : '15px'};
  font-weight: ${({ type }) => (type == 'headline' ? 'bold' : 'normal')};
`;

const StyledText = ({ type, style, viewStyle, children }: Props) => {
  return (
    <View style={viewStyle}>
      <Headline type={type} style={style && style}>
        {children}
      </Headline>
    </View>
  );
};

export default StyledText;
