import React from 'react';
import { Alert } from 'react-native';
import {
    Container,
    Content,
    Nome,
    Text,
    ButtonContainer,
    LeftButton,
    RigthButton,
 } from './styles';

export interface IAnimalsProps {
    id: string;
    nome: string;
    dataNascimento: string;
    localizacao: string;
    raca: string;
    tipoAnimal: string;
    statusAnimal: string;
    pesoCompra: string;
}

export function AnimalsCard({
    id,
    nome,
    dataNascimento,
    localizacao,
    raca,
    tipoAnimal,
    statusAnimal,
    pesoCompra,
}: IAnimalsProps) {

    function handlePress() {
        Alert.alert('Função indisponível no momento')
    }

    return (
        <Container>
            <Content>
                <Nome>Nome: {nome}</Nome>
                <Text>Nascimento: {dataNascimento}</Text>
                <Text>Localização: {localizacao}</Text>
                <Text>Raça: {raca}</Text>
                <Text>Tipo: {tipoAnimal}</Text>
                <Text>Status: {statusAnimal}</Text>
                <Text>Peso: {pesoCompra}</Text>
                <ButtonContainer>
                    <LeftButton
                        title='Update'
                        color='#03b252'
                        onPress={handlePress}
                    >
                    </LeftButton>
                    <RigthButton
                        title='Deletar'
                        color='#e83f5b'
                        onPress={handlePress}
                    >
                    </RigthButton>
                </ButtonContainer>
            </Content>
        </Container>
    );
}
