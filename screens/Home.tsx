import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import StyledText from '../components/StyledText';
import TouchButton from '../components/TouchButton';
import { Colors } from '../constants/Colors';
import { RootTabScreenProps } from '../types';

const Wrapper = styled.View`
  width: 70%;
  align-self: center;
  align-items: center;
`;

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Wrapper>
        <StyledText type="headline">Timeore!</StyledText>
        <StyledText centered>
          Timeore ist deine App zum Erfassen deiner Arbeitszeiten
        </StyledText>
        <TouchButton
          label="weiter"
          onPress={() => navigation.navigate('Root')}
        />
      </Wrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor,
  },
});
