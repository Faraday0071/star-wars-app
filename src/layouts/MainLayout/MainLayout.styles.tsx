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

    /* ${styleConst.MEDIA_QUERY_DETAILS_VIEW} {
        width: 100%;
        margin: 20vw;
    } */

    ${styleConst.MEDIA_QUERY} {
        margin-top: ${styleConst.DESKTOP_HEADER_HEIGHT_MEDIA};
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
`

export const Styled = {
    Container,
    Content,
}
