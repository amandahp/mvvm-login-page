import React, {FunctionComponent} from 'react'
import { isPropertySignature } from 'typescript'
import ButtonStyled from './buttonstyled'

type ButtonProps = {
    handleClick: any,
    buttonValue: string
}

export const Button:FunctionComponent<ButtonProps> = (props) => {
    return(
        <ButtonStyled onClick={() => props.handleClick}>{props.children}</ButtonStyled>

    )
}