import { Pressable, PressableProps } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';
import StyledText from './StyledText';

type Props = PressableProps & {
  label: string;
};

type InnerProps = {
  pressed: boolean;
};

const ButtonWrapper = styled.View`
  padding: 10px;
  background-color: ${({
    pressed,
    disabled,
  }: InnerProps & Partial<PressableProps>) =>
    disabled
      ? Colors.disabledButtonColor
      : pressed
      ? Colors.pressedButtonColor
      : Colors.buttonColor};
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ disabled }: Partial<PressableProps>) =>
    disabled ? Colors.disabledButtonBorderColor : Colors.borderColor};
  align-items: center;
  min-width: 200px;
`;

const TouchButton = ({ label, ...props }: Props) => {
  return (
    <Pressable {...props}>
      {({ pressed }) => (
        <ButtonWrapper pressed={pressed} disabled={props.disabled}>
          <StyledText bold>{label}</StyledText>
        </ButtonWrapper>
      )}
    </Pressable>
  );
};

export default TouchButton;
