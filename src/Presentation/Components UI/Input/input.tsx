import React, {FunctionComponent} from 'react'
import { isPropertySignature } from 'typescript'
import InputStyled from './inputstyled'

type InputProps = {
    handleChange: any,
    placeHolderValue: string
}

export const  Input:FunctionComponent<InputProps> = (props) => {
    return(
        <InputStyled onChange={() => props.handleChange}>{props.children}</InputStyled>

    )
} 