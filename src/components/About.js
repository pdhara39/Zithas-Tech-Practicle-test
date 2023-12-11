import Card from 'react-bootstrap/Card';
import image from '../images/img2.png'
import Footer from './Footer';
const img={
  height:"700px",
  opacity:"0.7"
}
const p={
  fontSize:"20px",
  padding:"100 20px",


 
}
export default function About(){
    return(
        <>
       
        <Card className="bg-dark text-white">
      <Card.Img style={img} src={image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title > <h1 >About</h1>
          Connect Inspiration to Excellence</Card.Title>
        <Card.Text style={p} className={p}>
        We are here to help you automize your business. We know that when you work with automation, in order to achieve the optimal levels of effectiveness and efficiency, you need a system that is easy to use and intuitively appealing. You need a system that is well-designed.

        In short, you want a system that will take care of all the important details for you and does exactly what it’s supposed to do. It will offer an incredible user experience and allow you to focus on your business goals.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  <Footer/>
   </>
    )
}