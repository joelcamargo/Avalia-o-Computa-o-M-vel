import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        
    if (email.toLowerCase().includes('@ifpr')) { 
        console.log('Email:', email);
        navigation.navigate('Chat'); 
         
    }else{
        alert('Email inválido. Deve ser do IFPR.');
    }
    };

    const handleCadastro = () => {
        
        navigation.navigate('Cadastro');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acesse o chat</Text>
            <Text style={styles.description}>Use seu e-mail e senha cadastrados para acessar o painel de conversas.</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail."
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha."
                secureTextEntry={true}
                onChangeText={text => setSenha(text)}
            />
            <Pressable
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
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
    description: {
        marginBottom: 20,
        textAlign: 'center',
        color: 'white',
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
        width: 327,
        height:48,
        backgroundColor: '#219653',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default Login;
