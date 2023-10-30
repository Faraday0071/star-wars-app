import styled from 'styled-components'
import { styleConst } from '@/globalStyles/constants'

const Container = styled.div`
    width: 100%;
    padding: 1rem;
    margin-bottom: 2rem;
`
const Input = styled.input`
    width: 100%;
    height: 2rem;
    padding: 0.5rem;
    background-color: transparent;
    border: 3px solid white;
    border-radius: 5px;
    color: ${styleConst.STAR_WARS_YELLOW};
    font-weight: bold;

    &:focus {
        border-color: ${styleConst.STAR_WARS_YELLOW};
        outline-color: ${styleConst.STAR_WARS_YELLOW};
    }

    &:disabled {
        border-color: gray;
    }
`

export const Styled = {
    Container,
    Input,
}
