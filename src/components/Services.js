import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from "./Footer"
const img={
    height:"300px"
}
const header={
    textAlign:"center"
}

export default function Services(){
    return(
        <>
        <h1 style={header}>Services</h1>
        <CardGroup>
      <Card className='mx-2 p-1'>
        <Card.Img style={img} variant="top" src="https://i.pinimg.com/736x/a6/cc/3f/a6cc3f244d6182d2cc190ea0164a725d.jpg" />
        <Card.Body>
          <Card.Title>Business Automation</Card.Title>
          <Card.Text>
          We help businesses To automize their process, increase their profitability, reduce their risk and achieve sustainable growth.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='mx-2 p-1'>
        <Card.Img style={img} variant="top" src="https://img.freepik.com/free-photo/top-view-arrangement-natural-material-stationery_23-2148898233.jpg" />
        <Card.Body>
          <Card.Title>Digital Marketing</Card.Title>
          <Card.Text>
          Our digital marketing services in Canada drive growth and boost brand visibility, ensuring businesses reach their target audience effectively, and maximizing their online presence and conversion rates.
          </Card.Text>
        </Card.Body>       
      </Card>

      <Card className='mx-2  p-1'>
        <Card.Img style={img} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaW2GTAjmGOy9QMv8gFh5bu2EqSWKDyPFmmNNf6dKHzUJGub6GkDIz309vQw-bwexEyQ&usqp=CAU" />
        <Card.Body>
          <Card.Title>Custom Software Development</Card.Title>
          <Card.Text>
          With our expertise, we create custom software that aligns perfectly with your unique needs, ensuring streamlined operations and accelerated growth.
          </Card.Text>
        </Card.Body>        
      </Card>

    </CardGroup>
    <CardGroup>

      <Card className='mx-2 p-1'>
        <Card.Img style={img} variant="top" src="https://img.freepik.com/free-photo/top-view-arrangement-natural-material-stationery_23-2148898233.jpg" />
        <Card.Body>
          <Card.Title>Mobile Apps Development</Card.Title>
          <Card.Text>
          We provide complete mobile apps development services to help you make the most out of your business.
          </Card.Text>
        </Card.Body>       
      </Card>

      <Card className='mx-2  p-1'>
        <Card.Img style={img} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaW2GTAjmGOy9QMv8gFh5bu2EqSWKDyPFmmNNf6dKHzUJGub6GkDIz309vQw-bwexEyQ&usqp=CAU" />
        <Card.Body>
          <Card.Title>Website Development</Card.Title>
          <Card.Text>
          In the Canadian business landscape, website development encompasses crafting and maintaining web-based assets, involving design, coding, and performance optimization to drive digital growth.
          </Card.Text>
        </Card.Body>        
      </Card>

    </CardGroup>
    <Footer/>
     
        </>
    )
}