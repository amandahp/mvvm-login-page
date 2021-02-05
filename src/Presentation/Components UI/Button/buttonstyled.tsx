import styled from 'styled-components'

const ButtonStyled = styled.button`
    padding:.75rem;
    width:100%;
    border-radius:3px;
    border:2px solid #353D5A;
    color:#353D5A;
    background:transparent;
    font-weight:bold;
    cursor:pointer;
    margin-bottom:5px;
    transition:.2s ease-in;
    &:hover{
        box-shadow:1px 4px 7px rgba(0,0,0,.2);
        background:#353D5A;
        color:#fff;
    }
;`

export default ButtonStyled