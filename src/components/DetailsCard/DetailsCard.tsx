import { FunctionComponent, ReactNode } from 'react'
import { Styled } from './DetailsCard.styles'

type DetailsCardProps = {
    title: string;
    picture: string;
    details: ReactNode;
}

export const DetailsCard: FunctionComponent<DetailsCardProps> = ({
    title,
    picture,
    details,
}) => {
    

    return (
        <Styled.Container>
            <Styled.Title>{title}</Styled.Title>
            <Styled.SubContainer>
                <Styled.Picture src={picture} alt={title} />
                <Styled.DetailsBlock>
                    {details}
                </Styled.DetailsBlock>
            </Styled.SubContainer>
        </Styled.Container>
    )
}
