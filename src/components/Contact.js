import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './form.css';
import Footer from './Footer';

export default function Contact(){
    const [name,setName]= useState("");
    const [email,setemail] = useState("");

    const handlename=(e)=>{
        setName(e.target.value)

    }
    const handleemail=(e)=>{
        setemail(e.target.value)

    }
    const onsubmit=(event)=>{
        event.preventDefault();
        console.log(name,email);
    }
    return(
        <>
        <Form>
        <h1>Contact Us</h1>        
      <Form.Label>Username</Form.Label>
        <Form.Control
         type='text'
         value={name}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handlename}
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
            type="email"
            value={email}
          placeholder="Email"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleemail}
        />
        <Button type="submit" onClick={onsubmit}>Subscribe</Button>
        </Form>
        <Footer/>
        </>
    )
}
  
