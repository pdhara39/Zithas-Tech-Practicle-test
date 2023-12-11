import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';

const img ={
    height:"600px",
    margin:"0px"
}

function Home() {
  return (
    <>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img style={img}
              className="d-block w-100 "
              src="https://images.pexels.com/photos/5615067/pexels-photo-5615067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Home 1"
            />
            <Carousel.Caption>
              <h5> hello There</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={img}
              className="d-block w-100 "
              src="https://images.pexels.com/photos/3401402/pexels-photo-3401402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>We are Providing</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={img}
              className="d-block w-100 "
              src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Digitalized india</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Footer/>
        </>
      );
    }


export default Home;