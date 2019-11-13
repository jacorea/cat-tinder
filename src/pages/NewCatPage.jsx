import React, { Component } from 'react';
import { Form, Button, Row } from 'react-bootstrap';

export class NewCatPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }

  handleChange = (event) => {
    let { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form: form })
  }


  render() {
    const {name, age, enjoys} = this.state.form;
    const { newCat } = this.props;
    return (
      <div>
        <Form onSubmit={()=>newCat(this.state.form)}>
          <Form.Group>
            <Row>
              <Form.Label id="name">Name</Form.Label>
              <Form.Control 
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
              />
            </Row>
            <Row>
              <Form.Label id="age">Age</Form.Label>
              <Form.Control 
                type="text"
                name="age"
                onChange={this.handleChange}
                value={age}
              />
            </Row>
            <Row>
              <Form.Label id="enjoys">Enjoys</Form.Label>
              <Form.Control 
                type="text"
                name="enjoys"
                onChange={this.handleChange}
                value={enjoys}
              />
            </Row>
          </Form.Group>
        </Form>
        <Button type="submit" id="submit" onClick={newCat(this.state.form)}>Create Cat Profile</Button>
      </div>
    )
  }
}

export default NewCatPage

