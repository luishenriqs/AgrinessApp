import React from 'react';
import { Modal } from 'react-native';
import {
  Container,
  Content,
  TitleContainer,
  Title,
  SairButtonContainer,
  SairButton,
  SairText,
  CancelButtonContainer,
  CancelButton,
  CancelText
} from './styles';

interface IProps {
    isVisible: boolean;
    title: string;
    firstLabel?: string;
    firstOnPress?(): void;
    secondLabel?: string;
    secondOnPress?(): void;
}

export function ModalPattern({
    isVisible,
    title,
    firstLabel,
    firstOnPress,
    secondLabel,
    secondOnPress
}: IProps) {

  return (
    <Modal
        animationType='fade'
        transparent={true}
        visible={isVisible}
    >
        <Container>
            <Content>
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
                <SairButtonContainer>
                    <SairButton onPress={firstOnPress}>
                        <SairText>
                            {firstLabel}
                        </SairText>
                    </SairButton>
                </SairButtonContainer>
                <CancelButtonContainer>
                    <CancelButton onPress={secondOnPress}>
                        <CancelText>
                            {secondLabel}
                        </CancelText>
                    </CancelButton>
                </CancelButtonContainer>
            </Content>
        </Container>
    </Modal>
  );
};