import styled from 'styled-components'

export const Wrapper = styled.footer`
min-height: 30px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 1rem;
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    p{
        text-align: center;
    }
    p:nth-child(2){
        font-size: 1rem;
        text-align: center;
        
    }
    }

    
   

`
