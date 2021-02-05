import React, {FunctionComponent} from 'react'
import { isPropertySignature } from 'typescript'
import ContainerStyled from './containerstyled'

type ContainerProps = {
    children:any
}

export const  Container:FunctionComponent<ContainerProps> = (props) => {
    return(
        <ContainerStyled>{props.children}</ContainerStyled>

    )
} 