import { FunctionComponent  } from 'react'
import { Spinner } from '@/components/Spinner/Spinner'
import { Card, CardProps } from './Card/Card'
import { Styled } from './CardList.styles'

export type CardListProps = {
    list: CardProps[];
    isLoading: boolean;
}

export const CardList: FunctionComponent<CardListProps> = ({ list, isLoading }) => {
    if (isLoading) {
        return <Styled.SpinnerContainer><Spinner /></Styled.SpinnerContainer>
    }
    if (!list.length) {
        return <div>No data</div>
    }

    return (
        <>
            <Styled.Container>
                {list.map(el => (
                    <Card key={el.path} {...el} />
                ))}
            </Styled.Container>
        </>
    )
}
