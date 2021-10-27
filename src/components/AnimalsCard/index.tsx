import React from 'react';
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
                    >
                    </LeftButton>
                    <RigthButton
                        title='Deletar'
                        color='#e83f5b'
                    >
                    </RigthButton>
                </ButtonContainer>
            </Content>
        </Container>
    );
}
