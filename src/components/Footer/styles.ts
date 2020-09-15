import styled from 'styled-components'

export const Wrapper = styled.footer`
height: 30px;
display: grid;
grid-template-columns: 1fr 1fr;
background: #000; 
opacity: 0.4;

p{
    padding: 0 2rem;
    color: white;
}

p:nth-child(2){
    text-align: right;
    font-size: 1.4rem;
    span {
        color: red;
       
    }
}

a, a:visited{
    text-decoration: none;
    color: white;
}

@media (max-width: 600px){
    p:nth-child(2){
        font-size: 1rem;
    }
   
}
`
