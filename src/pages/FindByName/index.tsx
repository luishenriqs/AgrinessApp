import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import * as Yup from 'yup';
import api from '../../services/api';
import Header from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { AnimalsCard } from '../../components/AnimalsCard';

import {
  Container,
  Content,
  Title, 
  Introduction,
  CardContainer,
  Form, 
  Footer,
} from './styles';

interface IAnimalsProps {
  codigoRastreamento: string,
  created_at: string,
  dataNascimento: string,
  entradaPlantel: string,
  id: string,
  localizacao: string,
  nome: string,
  pesoCompra: string,
  raca: string,
  statusAnimal: string,
  tipoAnimal: string,
  updated_at: string,
}

export function FindByName() {
  const [nome, setNome] = useState('');
  const [animal, setAnimal] = useState<IAnimalsProps>({} as IAnimalsProps);

  console.log('useState ', animal);

  async function handleFindAnimal() {
    try {
      const schema = Yup.object().shape({
        nome: Yup.string()
          .required('Nome obrigatório')
      });

      await schema.validate({ nome });

      const response = await api
      .get(`/animals/findname?nome=${nome}`);

      if (response) {
        setAnimal(response.data);
      };
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert(
          'Animal não encontrado',
        );
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />
          <Header
            title='ENCONTRE UM ANIMAL'
            text='Procure por nome'
            headerSize={'small'}
            logout={false}
          />
          <Content>
            <Title>
              AGRINESS
            </Title>
            <Introduction>
              Encontre um animal por nome:
            </Introduction>

            <CardContainer>
              {animal.id && (
                <AnimalsCard 
                  id={animal.id}
                  nome={animal.nome}
                  dataNascimento={animal.dataNascimento}
                  localizacao={animal.localizacao}
                  raca={animal.raca}
                  tipoAnimal={animal.tipoAnimal}
                  statusAnimal={animal.statusAnimal}
                  pesoCompra={animal.pesoCompra}
                />
              )}
            </CardContainer>


            <Form>
              <Input
                iconName='user'
                placeholder='Nome do animal'
                value={nome}
                onChangeText={setNome}
              />
            </Form>

            <Footer>
              <Button
                title='Buscar'
                enabled={true}
                loading={false}
                onPress={handleFindAnimal}
              />
            </Footer>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}