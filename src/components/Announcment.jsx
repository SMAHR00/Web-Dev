import { styled } from "@material-ui/styles"

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;

`;


const Announcment = () => {
  return (
    <Container>
      Super Deal! Free Shipping On Orders Over $50
    </Container>
  )
}

export default Announcment