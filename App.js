import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/formIMC';

export default function App() { //Inicializando o app
  return (
    <View style={styles.container}>
      <Title /> {/* título */}
      <FormIMC/> {/* formulário do imc */}
    </View>
  );
}

//Estilizando o app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    padding: 16,
    justifyContent: 'center',
  },
});
