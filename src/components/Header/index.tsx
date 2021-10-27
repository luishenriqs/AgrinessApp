import React from 'react';
import {
  Container, 
  HeaderWrapper, 
  HeaderContent,
  Icon, 
  Title, 
  AdditionalText, 
  Empty
} from './styles';

interface HeaderProps {
  title: string;
  text?: string;
  headerSize: 'big' | 'small';
  logout?: boolean;
  onPress?(): void;
}


const Header: React.FC<HeaderProps> = ({
  title, 
  text, 
  headerSize,
  logout,
  onPress
}) => {
  return (
    <Container>
      <HeaderWrapper headerSize={headerSize}>
        <HeaderContent>
          <Empty/>
          <Title>{title}</Title>
          {
          logout 
            ?  <Icon size={30} name="power-settings-new" onPress={onPress} />
            : <Empty/>
          }
         
        </HeaderContent>

        {text && (
          <AdditionalText>{text}</AdditionalText>
        )}
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
