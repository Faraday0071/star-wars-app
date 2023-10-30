import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { styleConst } from '@/globalStyles/constants';

const Container = styled.ul`
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 1rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    ${styleConst.MEDIA_QUERY} {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: row;
        gap: unset;
        justify-content: space-between;
        width: 100%;
    }
`
const ListEl = styled.li`
    height: 2.5rem;
    line-height: 2.5rem;
    background-color: transparent;
    font-size: 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 0 0.5rem;
    cursor: pointer;

    &:hover {
        border-color: ${styleConst.STAR_WARS_YELLOW};
        color: ${styleConst.STAR_WARS_YELLOW};
    }

    ${styleConst.MEDIA_QUERY} {
        font-size: 1.2rem;
    }
`
const Link = styled(RouterLink)`
    all: unset;
    display: inline-block;
    width: 100%;
`
const Icon = styled.img`
    height: 1.5rem;
    margin-right: 0.5rem;

    ${styleConst.MEDIA_QUERY} {
        height: 1.2rem;
    }
`
const Text = styled.span`
    @media (max-width: 365px) {
        display: none;
    }
`

export const Styled = {
    Container,
    ListEl,
    Link,
    Icon,
    Text,
}
