import styled, { keyframes } from 'styled-components'
import { styleConst } from '@/globalStyles/constants'
import { SpinnerProps } from './Spinner'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
const Spinner = styled.div<Required<SpinnerProps>>`
    border: 10px solid rgba(255, 255, 255, 0.3);
    border-top: 10px solid ${styleConst.STAR_WARS_YELLOW};
    border-radius: 50%;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    animation: ${spin} 1s linear infinite;
    margin: 10px auto;
`
export const Styled = {
    Spinner,
}