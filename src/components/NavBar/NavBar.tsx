import { FunctionComponent } from 'react'
import { Styled } from './NavBar.styles'

type NavBarListEl = {
    name: string;
    path: string;
    icon?: string;
}

export const NavBar: FunctionComponent<{ list?: NavBarListEl[] }> = ({ list }) => {
    if (!list) {
        return null
    }

    return (
        <Styled.Container>
            {list.map(el => (
                <Styled.ListEl key={el.path} >
                    <Styled.Link to={el.path}>
                        {el.icon && <Styled.Icon src={el.icon} />}
                        <Styled.Text>{el.name}</Styled.Text>
                    </Styled.Link>
                </Styled.ListEl>
            ))}
        </Styled.Container>
    )
}
