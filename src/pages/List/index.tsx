import React, {useState} from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import { ModalPattern }  from '../../components/ModalPattern';
import { AnimalsCard } from '../../components/AnimalsCard';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Content,
  AnimalsList,
} from './styles';

export function List() {
  const [isVisible, setIsVisible] = useState(false);
  const [animals, setAnimals] = useState([]);

  const { signOut } = useAuth();
  const theme = useTheme();

  const handleLogout = () => {
    setIsVisible(false);
    signOut();
  };

  const handleCancel = () => {
      setIsVisible(false);
  };

  async function listAllAnimals() {
    const response = await api.get('/animals/');
    setAnimals(response.data);
  }

  return (
    <Container>
        <Header
          title='LISTA DE ANIMAIS'
          text='2021'
          headerSize={'small'}
          logout={true}
          onPress={() => setIsVisible(true)}
        />
        <Content>
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
        </Content>

        <Button
          title='Listar animais'
          color={theme.colors.main}
          enabled={true}
          loading={false}
          onPress={listAllAnimals}
        />

        <ModalPattern
          isVisible={isVisible}
          title='Você deseja sair?'
          firstLabel='Sair'
          firstOnPress={() => handleLogout()}
          secondLabel='Cancelar'
          secondOnPress={() => handleCancel()}
        />
    </Container>
  );
}