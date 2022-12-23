import { ReactNode } from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';

type Props = {
  type?: 'headline' | 'label';
  children: ReactNode;
  style?: TextStyle;
  viewStyle?: ViewStyle;
  bold?: boolean;
  centered?: boolean;
};

const Headline = styled.Text<Partial<Props>>`
  color: ${Colors.textColor};
  font-size: ${({ type }) =>
    type == 'headline' ? '30px' : type == 'label' ? '12px' : '15px'};
  font-weight: ${({ type, bold }) =>
    type == 'headline' || bold !== undefined ? 'bold' : 'normal'};
  text-align: ${({ centered }) => (centered !== undefined ? 'center' : 'left')};
`;

const StyledText = ({
  type,
  style,
  viewStyle,
  bold,
  centered,
  children,
}: Props) => {
  return (
    <View style={viewStyle}>
      <Headline
        centered={centered}
        bold={bold}
        type={type}
        style={style && style}
      >
        {children}
      </Headline>
    </View>
  );
};

export default StyledText;
