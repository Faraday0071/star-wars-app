import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 1rem;
    background-color: rgba(0, 0, 128, .4);
    border-radius: 1rem;
`
const Title = styled.h1`
    margin: 0 auto;
    font-size: 3rem;
`
const SubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`
const Picture = styled.img`
    max-width: 300px;
`
const DetailsBlock = styled.div``

export const Styled = {
    Container,
    Title,
    SubContainer,
    Picture,
    DetailsBlock,
}
