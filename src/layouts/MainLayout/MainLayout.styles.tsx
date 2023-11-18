import styled from 'styled-components'
import { ToastContainer as OriginalToastContainer } from 'react-toastify'
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
const ToastContainer = styled(OriginalToastContainer)`
    &&& .Toastify__toast-theme--light {
        background-color: transparent;
        color: ${styleConst.STAR_WARS_YELLOW};
        border: 1px solid ${styleConst.STAR_WARS_YELLOW};
    }
`

export const Styled = {
    Container,
    Content,
    ToastContainer,
}
