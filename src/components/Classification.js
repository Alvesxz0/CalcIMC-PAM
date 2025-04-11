import React from "react";
import { Text, StyleSheet, View } from "react-native";

//Classificando o peso por meio do IMC
const Classification = ({ imc }) => { 
    const getClassification = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        else if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
        else if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
        else if (imc >= 30 && imc < 34.9) return 'Obesidade grau 1';
        else if (imc >= 35 && imc < 39.9) return 'Obesidade grau 2';
        else if (imc >= 40) return 'Obesidade grau 3';
        return '';
    };

    //Retornando o texto da classificação
    return (
        <View style={styles.container}>
          { <Text style={styles.text}>Classificação: {getClassification(imc)}</Text> }
        </View>
      );
    }
  
  const styles = StyleSheet.create({
    container: { //Colocando margem no container
      marginVertical: 10 
    },
    text: { //Estilizando o texto
      fontSize: 18,       
      textAlign: 'center', 
      color: 'white',      
      fontWeight: 'bold', 
      backgroundColor: '#4169E1',
      padding: 10,        
      borderRadius: 10,        
    },
  });

export default Classification; //Exportando o componente classificação