import styled from "styled-components";
import React from 'react'


const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <Signup>GET IT ALL THERE</Signup>
                    <Description>
                        Get Premier Access to Rays and the Last
                        Dragon for an additional fee with a Disney+
                        subscription. As of 03/26/21, the price of
                        Disney and The Disney Bundle will increase
                        by $1
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh;

`

const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;

`
const BgImage = styled.div`
background-image:url("/images/login-background.jpg");
height:100%;
position:absolute;
z-index:-1;
left:0;
top:0;
right:0;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
`;

const CTA = styled.div`
   max-width:650px;
   display:flex;
   flex-direction:column;
   width:100%;

`;

const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%

`;

const Signup = styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px 0;
border:1px solid transparent;
border-radius:4px;

&:hover{
    background-color:#0483ee;
}

`;

const Description = styled.p`

color:hsla(0,0% , 95.3%, 1);
font-size:11px;
margin:0 0 24px;
line-height:1.5;
letter-spacing:1.5px;



`
const CTALogoTwo = styled.img`
max-width:600px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;
width:100%;


`

export default Login
