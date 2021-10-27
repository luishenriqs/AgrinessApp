import React, { useState } from 'react';
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
  Form, 
  Footer 
} from './styles';

export function FindByLocation() {
  const [localization, setLocalization] = useState('');
  const [animal, setAnimal] = useState('');

  async function handleFindAnimal() {
    try {
      const schema = Yup.object().shape({
        nome: Yup.string()
          .required('Localização obrigatória')
      });

      await schema.validate({ localization });

      console.log(localization)

      const response = await api
      .get('/animals/findname/', {
        localization
      });

      if (animal) {
        setAnimal(response.data);
        console.log(response.data)
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
              Encontre um animal por sua localização:
            </Introduction>

            {/* {animal && (
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
            )} */}



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