import styled from 'styled-components'
import { styleConst } from '@/globalStyles/constants';

const Container =  styled.div`
    width: 100vw;
    height: auto;
`

const Content = styled.div`
    padding: 10px;
    margin-top: ${styleConst.DESKTOP_HEADER_HEIGHT};
    margin-left: 180px;
    margin-right: 1rem;
`

export const Styled = {
    Container,
    Content,
}
