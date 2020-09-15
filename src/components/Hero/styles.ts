import styled from 'styled-components'

export const Dashboard = styled.div`
display: flex;
flex-flow: row wrap;
align-items: center;
justify-content: center;
width: 100%;
`

export const Wrapper = styled.section`

    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 60vw;
    margin: 0 auto;
    flex-direction: column;
    text-align: center;
    

    & > * {
        margin-top: 4rem; 
    }

    @media (max-width: 600px){
        width: 80vw;
        & > * {
            margin-top: 3rem; 
        }

  


}

.date{
  color: #0a0a0a;
      font-size: 5rem;
    }


`




export const Title = styled.h1`
  font-size: 5.6rem;
  line-height: 7rem;

  @media (max-width: 600px){
    font-size: 4rem;
    line-height: 5rem;
  }
 
`

export const Instrution = styled.p`
  font-weight: 300;
    color: black;
    background-color: #ffd2d6;
    border-radius: 5px;
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
    margin: 2rem auto;


`

export const Description = styled.div`
  font-size: 2rem;
  font-weight: 500;
`





