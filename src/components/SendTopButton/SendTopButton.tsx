import { FunctionComponent } from 'react'
import arrow from '@/assets/up-arrow.svg'
import { Styled } from './SendTopButton.styles'

export const SendTopButton: FunctionComponent<{ show: boolean }> = ({
    show,
}) => show ? (
    <Styled.Container onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <Styled.Icon src={arrow} alt='arrow up' />
    </Styled.Container>
) : null;
