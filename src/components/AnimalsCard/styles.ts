import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  width: 100%;
  /* height: 220px; */
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  border: 2px solid  ${({ theme }) => theme.colors.shape_dark };;
  background: ${({ theme }) => theme.colors.shape };
`;

export const Nome = styled.Text`
  color: ${({ theme }) => theme.colors.shape_dark };
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500 };
  line-height: ${RFValue(20)}px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.title };
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400 };
  line-height: ${RFValue(20)}px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

export const LeftButton = styled.Button`
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  margin: 0 5px;
  border-radius: 8px;
`;

export const RigthButton = styled.Button`
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  margin: 0 5px;
  border-radius: 10px;
`;

