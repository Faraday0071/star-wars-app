import { FunctionComponent } from 'react';
import starWarsLogo from '@/assets/Star_Wars_Logo.png'
import { Styled } from './Header.styles';

export const Header: FunctionComponent = () => {
    return (
        <Styled.Container>
            <Styled.Link to="/">
                <Styled.MainLogo src={starWarsLogo} alt="Star wars" />
            </Styled.Link>
        </Styled.Container>
    )
}
