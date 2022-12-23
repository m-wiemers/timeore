import { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';
import StyledText from './StyledText';

type Props = TextInputProps & {
  label: string;
  error?: string;
  style?: ViewStyle;
  placeholder?: string;
  required?: boolean;
};

type InnerProps = {
  isActive?: boolean;
};

const ErrorLabel = styled(StyledText)`
  text-align: right;
  margin-right: 7px;
  font-weight: 700;
  color: ${Colors.error};
`;

const Wrapper = styled.View`
  position: absolute;
  top: -7px;
  left: 10px;
  background-color: ${Colors.backgroundColor};
  z-index: 20;
`;

const StyledInput = styled.TextInput`
  color: ${Colors.textColor};
  padding: 5px;
  padding-left: 7px;
  border-width: 2px;
  border-color: ${({ error, isActive }: InnerProps & Partial<Props>) =>
    isActive
      ? Colors.activeBorderColor
      : error == undefined || error == ''
      ? Colors.borderColor
      : Colors.error};
  border-radius: 10px;
`;

const Input = ({
  label,
  style,
  placeholder,
  error,
  required,
  ...props
}: Props): JSX.Element => {
  const [active, isActive] = useState<boolean>(false);
  const { onBlur } = props;

  const handleBlur = () => {
    if (onBlur) {
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => onBlur(e);
    }
    isActive(false);
  };

  return (
    <View style={[style, { marginBottom: 20, position: 'relative' }]}>
      <Wrapper>
        <StyledText viewStyle={{ marginHorizontal: 5 }} type="label">
          {required ? `${label} *` : label}
        </StyledText>
      </Wrapper>
      <StyledInput
        placeholder={placeholder}
        placeholderTextColor={Colors.placeholderColor}
        onFocus={() => isActive(true)}
        onBlur={handleBlur}
        error={error}
        isActive={active}
        {...props}
      />
      {error && <ErrorLabel type="label">{error}</ErrorLabel>}
    </View>
  );
};

export default Input;
