import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { IAnimalsProps } from '../../components/AnimalsCard';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Content = styled.View`
  height: 70%;
  background: ${({ theme }) => theme.colors.shape };
  padding: 20px;
`;

export const AnimalsList = styled(
  FlatList as new () => FlatList<IAnimalsProps>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
      paddingBottom: getBottomSpace()
  },
})``;
