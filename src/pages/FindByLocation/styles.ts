import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { IAnimalsProps } from '../../components/AnimalsCard';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Content = styled.View`
  justify-content: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Introduction = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(25)}px; ;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 15px;
`;

export const CardContainer = styled.View`
  height: 250px;
  margin-bottom: 25px;
`;

export const AnimalsList = styled(
  FlatList as new () => FlatList<IAnimalsProps>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
      paddingBottom: getBottomSpace()
  },
})``;


export const Footer = styled.View``;