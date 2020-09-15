import styled from 'styled-components'

export const Wrapper = styled.div`


width: 200px;
margin: 3rem 2rem;
padding: 2rem;


border-radius: 9px;
background: #EFFFFA;
box-shadow:  7px 7px 14px #e3f2ee, 
             -7px -7px 14px #fbffff;


& > * {
    color: black;
}

.title{
    font-size: 1.6rem;  
    height: 50px; 

}

.value{
    margin-top: 2rem;
    font-size: 2.5rem;
}

`
