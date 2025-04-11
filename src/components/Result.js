import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Result = ({ imc }) => {
     //Retornando a mensagem de resultado
    return(
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
    );
};

//Estilizando a mensagem do resultado
const styles = StyleSheet.create({
    result: {
        fontSize: 18,       
        textAlign: 'center', 
        color: 'white',      
        fontWeight: 'bold', 
        backgroundColor: '#4169E1',
        padding: 10,        
        borderRadius: 10,        
        marginTop: 20,
    },
});

export default Result; //Exportando o componente result