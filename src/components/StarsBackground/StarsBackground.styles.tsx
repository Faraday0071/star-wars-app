import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  overflow: hidden;
  margin: 0; 
  padding: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

const Canvas = styled.canvas`
  canvas {
    display: block;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
`

export const Styled = {
    Container,
    Canvas,
}
