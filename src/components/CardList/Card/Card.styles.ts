import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom';
import { styleConst } from '@/globalStyles/constants';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    border-radius: 5px;
    border: 3px solid white;
    cursor: pointer;
    background-color: black;
    transition: transform .2s ease;

    &:hover {
        color: ${styleConst.STAR_WARS_YELLOW};
        border-color: ${styleConst.STAR_WARS_YELLOW};
        transform: scale(1.2);
    }
`

const Link = styled(RouterLink)`
    all: unset;
    display: block;
`
const Text = styled.p`
    text-align: center;
    font-size: 1.5rem;
    max-width: 200px;
    word-break: break-word;
`

const Icon = styled.img`
    max-width: 200px;
`

export const Styled = {
    Link,
    Container,
    Text,
    Icon,
}
