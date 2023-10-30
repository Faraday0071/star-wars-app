import styled from 'styled-components'
import { styleConst } from '@/globalStyles/constants'

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    
    ${styleConst.MEDIA_QUERY} {
        flex-wrap: unset;
        flex-direction: column;
        gap: 1rem;
        max-width: 220px;
        margin: 0 auto;
    }
`
const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
`

export const Styled = {
    Container,
    SpinnerContainer,
}
