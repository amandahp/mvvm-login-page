import React, {Fragment} from 'react'
import Button from '../../Components UI/Button/button';
import { Container } from '../../Components UI/Container/container'
import Input from '../../Components UI/Input/input'

const LoginScreenReact = ({handleChange,handleClick}) => {
    return(
        <Fragment>
            <Container>
                <Button handleClick={() =>handleClick}>Entrar</Button>
                <Input></Input>
            </Container>
        </Fragment>
    )
}

export default LoginScreenReact