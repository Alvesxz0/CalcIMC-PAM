import React from "react";
import { Text, StyleSheet, View } from "react-native";

//Calcula o peso ideal com base na altura fornecida
const IdealWeight = ({ altura }) => {  
    const alturaMetros = parseFloat(altura) / 100;
    const pesoMin = (18.5 * alturaMetros * alturaMetros).toFixed(2);
    const pesoMax = (24.9 * alturaMetros * alturaMetros).toFixed(2);
            
    //Retorna o peso ideal minimo e o máximo
    return ( 
    <View style={styles.container}>
      <Text style={styles.text}>Peso ideal: {pesoMin} kg - {pesoMax} kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { //Colocando margem no container
    marginVertical: 10,
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

export default IdealWeight; //Exportando o componente IdealWeight