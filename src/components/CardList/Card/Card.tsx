import { FunctionComponent } from 'react'
import { Styled } from './Card.styles'

export type CardProps = {
    name: string;
    path: string;
    icon?: string;
}

export const Card: FunctionComponent<CardProps> = ({ name, path, icon }) => (
    <Styled.Link to={path}>
        <Styled.Container>
            <Styled.Icon src={icon} alt={name} />
            <Styled.Text>{name}</Styled.Text>
        </Styled.Container>
    </Styled.Link>
)