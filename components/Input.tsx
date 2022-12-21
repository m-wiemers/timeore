import { TextInputProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';
import StyledText from './StyledText';

type Props = TextInputProps & {
  label?: string;
};

const StyledLabel = styled(StyledText)`
  margin-left: 7px;
`;

const StyledInput = styled.TextInput`
  color: ${Colors.textColor};
  border-color: ${Colors.borderColor};
  border-width: 2px;
  border-radius: 10px;
  padding: 10px;
`;

const Input = ({ label, ...props }: Props): JSX.Element => {
  return (
    <SafeAreaView>
      {label && <StyledLabel type="label">{label}</StyledLabel>}
      <StyledInput {...props} />
    </SafeAreaView>
  );
};

export default Input;
