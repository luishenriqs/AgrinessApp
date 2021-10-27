import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface IHeaderProps {
  headerSize: 'big' | 'small';
}

export const Container = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.main };
`;

export const HeaderWrapper = styled.View<IHeaderProps>`
  width: 100%;
  align-items: center;

  ${({ headerSize }) => headerSize === 'big' && css`
    height: ${RFPercentage(33)}px;
    align-items: center;
    justify-content: flex-start;
  `};
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  height: ${getStatusBarHeight() + RFPercentage(9)}px;
  align-items: center;
  justify-content: space-between;
  padding: 25px 15px 0 ;
`;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.shape };
  padding-bottom: 5px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600 };
`;

export const AdditionalText = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400 };
  margin-bottom: 15px;
`;

export const Empty = styled.View`
  width: 28px;
  height: 35px;
`;
