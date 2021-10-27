import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    background: ${({ theme }) => theme.colors.background_primary_rgb };
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 3px solid ${({ theme }) => theme.colors.main };

`;

export const TitleContainer = styled.View`
    width: ${RFValue(260)}px;
    height: 80px;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.main };
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500 };
  align-items: center;
`;

export const SairButtonContainer = styled.View`
    width: ${RFValue(260)}px;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: ${({ theme }) => theme.colors.shape };
`;

export const SairButton = styled.TouchableOpacity`
`;

export const SairText = styled.Text`
  color: ${({ theme }) => theme.colors.attention };
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500 };
  align-items: center;
`;

export const CancelButtonContainer = styled.View`
    width: ${RFValue(260)}px;
    align-items: center;
    justify-content: center;
    border-radius:10px;
    height: 50px;
    background: ${({ theme }) => theme.colors.background_primary_rgb };
`;

export const CancelButton = styled.TouchableOpacity`
`;

export const CancelText = styled.Text`
  color: ${({ theme }) => theme.colors.shape_dark };
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400 };
  align-items: center;
`;