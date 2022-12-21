import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import StyledText from '../components/StyledText';
import { Colors } from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [name, setName] = useState<string>('');

  return (
    <View style={styles.container}>
      <StyledText type="headline">Headline</StyledText>
      <StyledText>Einfach normaler ganz einfach normaler Text</StyledText>
      <StyledText type="label">dein Name</StyledText>
      <Card>
        <StyledText>Hello dies ist mehr</StyledText>
      </Card>
      <Input label="Name" value={name} onChangeText={setName} />
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
