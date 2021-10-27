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
  AnimalsList,
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

export function FindByLocation() {
  const [localization, setLocalization] = useState('');
  const [animals, setAnimals] = useState<IAnimalsProps[]>([]);

  async function handleFindAnimal() {
    try {
      const schema = Yup.object().shape({
        localization: Yup.string()
          .required('Localização obrigatória')
      });

      await schema.validate({ localization });

      const response = await api
      .get(`/animals/findlocalization?localization=${localization}`);

      if (response) {
        setAnimals(response.data);
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
          text='Procure por localização'
          headerSize={'small'}
          logout={false}
        />
        <Content>
          <Title>
            AGRINESS
          </Title>
          <Introduction>
            Encontre pela localização:
          </Introduction>

          <CardContainer>
            {animals && (
              <AnimalsList
                data={animals}
                keyExtractor={item => item.nome}
                renderItem={({ item, index }) => (
                  <AnimalsCard 
                    id={item.id}
                    nome={item.nome}
                    dataNascimento={item.dataNascimento}
                    localizacao={item.localizacao}
                    raca={item.raca}
                    tipoAnimal={item.tipoAnimal}
                    statusAnimal={item.statusAnimal}
                    pesoCompra={item.pesoCompra}
                  />
                )}
              />
            )}
          </CardContainer>


          <Form>
            <Input
              iconName='user'
              placeholder='Localização do animal'
              value={localization}
              onChangeText={setLocalization}
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