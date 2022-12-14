import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { sliderItems } from "../data";


const Container = styled.div`
width:100%;
height 100vh;
display: flex;
postion: relative;
overflow: hidden;
`;

const Arrow= styled.div`
height: 50px;
width: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom:0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opactiy: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: transalteX(0vw);
`;

const Slide = styled.div`
width: 100%vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${prope=> props.bg    };

`;

const ImageContainer = styled.div`
flex:1;
height:100%
`;

const Image = styled.img`
height: 80%;
`;

const InfoContainer = styled.div`
flex:1;
padding 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;

const Desc = styled.p`
margin: 50px 0px
font-size: 20px;
font-weight:500;
letter-spacing: 3px;
`;

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>
{
};

  return (
    <Container>
<Arrow direction="left" onClick={handleClick(()=>"left")}>
    <ArrowLeftOutlined/>
</Arrow> 
<Wrapper>
{sliderItems.map((item) =>( 
    <Slide bg = {item.bg} >
<ImageContainer>
    <Image src={itemm.img}/>
</ImageContainer>
<InfoContainer>
    <Title>{item.title}</Title>
    <Desc>{item.desc} </Desc>
    <Button>SHOP NOW</Button>
</InfoContainer>
</Slide>
) )}
</Wrapper>
<Arrow direction="right" onClick={handleClick(()=>"right")}>
    <ArrowRightOutlined/>
</Arrow>
    </Container>
  )
}

export default Slider