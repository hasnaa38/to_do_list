import React, { Component } from 'react';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Your',
      todoItems: [

      ],
      newTodo: '',
    }
  }

  todoRows = () => {
    return (
      this.state.todoItems.map(item => {
        return <tr key={item.action}>
          <td>{item.action}</td>
          <td>
            <input 
              type="checkbox"
              checked={item.done}
              onChange={(e) => this.toggleDone(item)}
            />
          </td>
        </tr>
      }))
  }

  updateValue = (e) => {
    e.preventDefault();
    this.setState(
      {
        newTodo: e.target.value,
      }
    )
  };

  newTodoItem = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {action: this.state.newTodo, done: false,},
      ],
    });
  };

  toggleDone = (chosenItem) => {
    this.setState({
      todoItems: this.state.todoItems.map(item => 
        item.action === chosenItem.action ? {...item, done: !item.done} : item,
      ),
    });
  };

  render() {
    return (
      <>
        <Container>
          <Row>
          {/* List header */}
          <Col xs={12}>
              <h2 className="bg-dark text-center text-white">{this.state.userName} To Do List</h2>
              <br/>
          </Col>
          {/* Add a new task form */}
          <Col xs={12}>
              <Form className="text-center">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Add a new task</Form.Label>
                  <Form.Control type="text" value={this.state.newTodo} onChange={this.updateValue}/>
                  <Form.Text className="text-muted">
                    Add your new to do item here then click "Add"
                  </Form.Text>
                </Form.Group>
                <Button variant="danger" onClick={this.newTodoItem}>Add</Button>
              </Form>
              <br/><br/>
            </Col>
            {/* List table */}
            <Col xs={12}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.todoRows()}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default App

