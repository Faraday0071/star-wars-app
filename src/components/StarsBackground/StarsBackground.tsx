import { FunctionComponent, useEffect, useState } from 'react'
import { Styled } from './StarsBackground.styles'
import { canvasLogic } from './canvasLogic'

export const StarsBackground: FunctionComponent = () => {
    const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null)

    useEffect(() => {
        let cleanUp = () => {}
    
        if (canvasRef) {
            cleanUp = canvasLogic(canvasRef)
        }

        return cleanUp
    }, [canvasRef])

    return (
        <Styled.Container>
            <Styled.Canvas ref={ref => setCanvasRef(ref)} />
        </Styled.Container>
    )
}