import styled from 'styled-components';
import { Link as RouterLink } from "react-router-dom";
import { styleConst } from '@/globalStyles/constants';

const Container = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
`

const MainLogo = styled.img`
    height: ${styleConst.DESKTOP_HEADER_HEIGHT};
`
const Link = styled(RouterLink)`
    all: unset;
    display: inline-block;
    cursor: pointer;
`

export const Styled = {
    Container,
    MainLogo,
    Link,
}