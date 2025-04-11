import { View, TextInput, Button, StyleSheet} from 'react-native';
import Result from './Result';
import { useState } from 'react';
import Classification from './Classification';
import IdealWeight from './IdealWeight';

const FormIMC = () => {
    const[peso, setPeso] = useState('');
    const[altura, setAltura] = useState('');
    const[imc, setImc] = useState(null);

    //Calculando o IMC
    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            console.log(imcCalculado);
            setImc(imcCalculado);
        }
    };

    return ( //Retornando o formulário do IMC
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
            
            {imc && (
                <>
                    <Result imc={imc}/>
                    <Classification imc={imc}/>
                    <IdealWeight altura={altura}/>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { //Definindo o tamanho e o alinhamento do container
      width: '100%',
      alignItems: 'center',
    },
    input: { //Estilizando o input
      width: '80%', 
      padding: 10, 
      marginVertical: 10,
      borderWidth: 2, 
      borderColor: 'white',
      borderRadius: 5, 
      backgroundColor: '#e0f7fa',
    },
});

export default FormIMC; //Exportando o componente formIMC