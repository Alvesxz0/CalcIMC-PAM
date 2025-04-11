import { Text, StyleSheet } from 'react-native';

const Title = () => {
    //Retornando o título
    return (
        <Text style={styles.titulo}>Calculadora de IMC</Text>
    );
};

//Estilizando o título
const styles = StyleSheet.create({ 
    titulo: {
        fontSize: 30, 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, 
        color: '#191970'
    },
});

export default Title; //Exportando o componente título