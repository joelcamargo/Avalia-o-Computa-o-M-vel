import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';

const Chat = () => {
    const [conversa, setConversa] = useState([
        { nome: 'Professor Ronan:', texto: 'Todos conseguiram fazer a atividade?', hora: '14:58' },
        { nome: 'Aluno1:', texto: 'Claro professor, muito fácil!', hora: '14:59' },
        { nome: 'Aluno1:', texto: 'Sim professor, easy!', hora: '15:00' },
        { nome: 'Eu:', texto: 'Professor, to com problema. Me ajuda', hora: '15:00' }
    ]);
    const [mensagem, setMensagem] = useState('');
    const scrollViewRef = useRef(null);

    useEffect(() => {
        
        scrollViewRef.current.scrollToEnd({ animated: true });
    }, [conversa]);

    const handleEnviarMensagem = () => {
        if (mensagem.trim() !== '') {
            const horaAtual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const novaMensagem = { nome: 'Eu', texto: mensagem, hora: horaAtual };
            setConversa([...conversa, novaMensagem]);
            setMensagem('');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                style={styles.conversas}
            >
                {conversa.map((item, index) => (
                    <View key={index} style={[styles.balaoContainer, { alignItems: item.nome === 'Eu' ? 'flex-end' : 'flex-start' }]}>
                        <View style={[styles.balao, { backgroundColor: item.nome === 'Eu' ? '#ECEAEA' : '#ECEAEA' }]}>
                            <Text style={[styles.nomeRemetente, { textAlign: item.nome === 'Eu' ? 'right' : 'left' }]}>
                                {item.nome}
                            </Text>
                            <Text style={styles.textoMensagem}>{item.texto}</Text>
                        </View>
                        <Text style={styles.textoHora}>{item.hora}</Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.chatInputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua mensagem"
                    value={mensagem}
                    onChangeText={text => setMensagem(text)}
                />
                <Pressable
                    style={styles.botaoEnviar}
                    onPress={handleEnviarMensagem}
                >
                    <Text style={styles.textoBotao}>Enviar</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    conversas: {
        flex: 1,
        paddingHorizontal: 10,
    },
    balaoContainer: {
        marginBottom: 10,
    },
    balao: {
        borderRadius: 10,
        padding: 10,
        maxWidth: '70%',
    },
    nomeRemetente: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 5,
    },
    textoMensagem: {
        fontSize: 12,
        color: '#000000',
    },
    textoHora: {
        textAlign: 'right',
        marginTop: 5,
        opacity: 0.6,
    },
    chatInputContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
        backgroundColor: '#FEFEFE',
        borderTopWidth: 1,
        borderTopColor: '#ECEAEA',
    },
    input: {
        flex: 1,
        height: 64,
        paddingHorizontal: 16,
        backgroundColor: '#ECEAEA',
        borderRadius: 16,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#ECEAEA',
    },
    botaoEnviar: {
        backgroundColor: '#219653',
        padding: 10,
        borderRadius: 16,
        marginLeft: 10,
    },
    textoBotao: {
        color: '#000000',
    },
});

export default Chat;
