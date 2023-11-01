import { FunctionComponent, Dispatch, SetStateAction } from 'react'
import { inputAutoFocus } from '@/helpers/inputAutoFocus'
import { Styled } from './SearchInput.styles'

type SearchInputProps = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    disabled?: boolean;
}

export const SearchInput: FunctionComponent<SearchInputProps> = ({
    search,
    setSearch,
    disabled = false,
}) => (
    <Styled.Container>
        <Styled.Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disabled={disabled}
            ref={inputAutoFocus}
        />
    </Styled.Container>
)
