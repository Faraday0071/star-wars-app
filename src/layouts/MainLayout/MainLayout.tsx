import { FunctionComponent, ReactNode } from 'react'
import { StarsBackground } from '@/components/StarsBackground/StarsBackground'
import { Header } from '@/components/Header/Header'
import { NavBar } from '@/components/NavBar/NavBar'
import { NAV_LIST } from '@/helpers/constants'
import { Styled } from './MainLayout.styles'

export const MainLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
          <Styled.Container>
            <Header />
            <Styled.Content>{children}</Styled.Content>
          </Styled.Container>
          <NavBar list={NAV_LIST} />
          <StarsBackground />
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const mainLayoutFn = (Child: FunctionComponent) => (
    <MainLayout>
        <Child />
    </MainLayout>
)
