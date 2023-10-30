import styled from 'styled-components'
import { styleConst } from '@/globalStyles/constants'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    margin: 0 auto;
    max-width: 700px;
    padding: 1rem;
    background-color: rgba(0, 0, 128, .4);
    border-radius: 1rem;
`
const Title = styled.h1`
    margin: 0 auto;
    font-size: 3rem;

    ${styleConst.MEDIA_QUERY_DETAILS_VIEW} {
        font-size: 1.5rem;
    }
`
const SubContainer = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    ${styleConst.MEDIA_QUERY_DETAILS_VIEW} {
        display: flex;
        flex-direction: column-reverse;
        gap: 1.5rem;
        padding: 0.5rem;
    }
`
const Picture = styled.img`
    max-width: 300px;

    ${styleConst.MEDIA_QUERY_DETAILS_VIEW} {
        max-width: 200px;
    }
`
const DetailsBlock = styled.div``

export const Styled = {
    Container,
    Title,
    SubContainer,
    Picture,
    DetailsBlock,
}
