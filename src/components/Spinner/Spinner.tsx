import { FunctionComponent } from 'react';
import { Styled } from './Spinner.styles'

export type SpinnerProps = {
    size?: number;
}

export const Spinner: FunctionComponent<SpinnerProps> = ({ size = 80 }) =>
    <Styled.Spinner size={size} />
