import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import Input from '../components/Input';
import StyledText from '../components/StyledText';
import { Colors } from '../constants/Colors';
import { RootTabScreenProps } from '../types';

type UserProps = {
  name: string;
  email: string;
  password: string;
  secondPassword: string;
};

const Wrapper = styled.View`
  width: 50%;
  align-self: center;
  justify-self: center;
`;

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [user, setUser] = useState<UserProps>({
    name: '',
    password: '',
    secondPassword: '',
    email: '',
  });

  const [error, setError] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    seconPasswordError: '',
  });

  const [console, setConsole] = useState<string>('');

  const checkEmail = () => {
    (user.email !== '' && !user.email.includes('@')) ||
    !user.email.includes('.')
      ? setError({ ...error, emailError: 'Email-Adresse nicht valide' })
      : setError({ ...error, emailError: '' });
  };

  return (
    <View style={styles.container}>
      <Wrapper>
        <StyledText
          type="headline"
          style={{ marginBottom: 20, textAlign: 'center' }}
        >
          Anmelden
        </StyledText>
        <StyledText>{console}</StyledText>
        <Input
          label="Name"
          value={user.name}
          onChangeText={(v) => setUser({ ...user, name: v })}
          placeholder="z.B. Max"
          autoComplete="name"
          style={{ marginBottom: 20 }}
          error={error.nameError}
          required
        />
        <Input
          label="E-Mail-Adresse"
          value={user.email}
          onChangeText={(v) => setUser({ ...user, email: v })}
          placeholder="deine@email.de"
          autoComplete="email"
          error={error.emailError}
          onBlur={checkEmail}
          required
        />
        <Input
          label="Passwort"
          value={user.password}
          onChangeText={(v) => setUser({ ...user, password: v })}
          placeholder="******"
          secureTextEntry
          error={error.passwordError}
          required
        />
        <Input
          label="Passwort wiedeholen"
          value={user.secondPassword}
          onChangeText={(v) => setUser({ ...user, secondPassword: v })}
          placeholder="******"
          secureTextEntry
          error={error.seconPasswordError}
          required
        />
      </Wrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Colors.backgroundColor,
  },
});
