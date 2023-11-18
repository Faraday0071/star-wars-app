import { FunctionComponent, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import { StarsBackground } from '@/components/StarsBackground/StarsBackground'
import { Header } from '@/components/Header/Header'
import { NavBar } from '@/components/NavBar/NavBar'
import { SendTopButton } from '@/components/SendTopButton/SendTopButton'
import { NAV_LIST } from '@/helpers/constants'
import { Styled } from './MainLayout.styles'
import 'react-toastify/dist/ReactToastify.css'

export const MainLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    })
    return (
        <>
          <Styled.Container>
            <Header />
            <div ref={ref} />
            <Styled.Content>{children}</Styled.Content>
          </Styled.Container>
          <NavBar list={NAV_LIST} />
          <SendTopButton show={!inView} />
          <StarsBackground />
          <Styled.ToastContainer autoClose={false} closeButton={false} />
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const mainLayoutFn = (Child: FunctionComponent) => (
    <MainLayout>
        <Child />
    </MainLayout>
)
