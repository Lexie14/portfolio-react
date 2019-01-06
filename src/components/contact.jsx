import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

class Contact extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:5000/express_backend/",
      data: {
        name: name,
        email: email,
        messsage: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  render() {
    return (
      <Container className="contact container-fluid">
        <h2>Send me a message</h2>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="Enter your message"
              />
            </FormGroup>
          </Col>
          <Button>Send</Button>
        </Form>
      </Container>
    );
  }
}

export default Contact;
