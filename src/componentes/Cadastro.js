import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const navigation = useNavigation();

    const handleCadastro = () => {
        const emailRegex = /@IFPR/i;
        if (emailRegex.test(email)) {
            console.log('Email válido:', email);
            console.log('Senha:', senha);
            console.log('Nome:', nome);
            
            
            navigation.navigate('Login');
        } else {
            alert('Email inválido. Por favor, utilize um e-mail do domínio IFPR.');
        }
    };

    return (
        <View style={styles.container}>
          
            <Text style={styles.title}>Cadastre-se</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={true}
                onChangeText={text => setSenha(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                onChangeText={text => setNome(text)}
            />
            <Pressable
                style={styles.button}
                onPress={handleCadastro}
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#052F0E',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FEFEFE',
    },
    input: {
        width: 327,
        height: 64,
        top: 480,
        left: 24,
        borderRadius: 16,
        padding: '16px 0px 0px 0px',
        gap: 0,
        border: '2px solid #FFFFFF',
        opacity: 1,
        backgroundColor: '#C9FDD5',
        paddingHorizontal: 16,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#219653',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
});

export default Cadastro;
