import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Col, Row, FormRow } from '@appfolio/react-gears';
import { observer, inject } from "mobx-react"
import CompanionForm from '../components/CompanionForm';

const NewPlant = observer(({ plantStore }) => {
  return (
    <Container>
      <h2>New Plant</h2>
      <Form>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Form.Group className="my-3">
              <Form.Label>Plant Name</Form.Label>
              <Form.Control placeholder="Ex. Tomato" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} lg={6}>
            <Form.Group className="my-3">
              <Form.Label>Plant Description</Form.Label>
              <FormRow type="textarea"/>
            </Form.Group>
          </Col>
        </Row>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Companions</Accordion.Header>
            <Accordion.Body className='bg-light'>
              <CompanionForm plantStore={plantStore}/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Pests</Accordion.Header>
            <Accordion.Body>
              Pests Form
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Planting Schedule</Accordion.Header>
            <Accordion.Body>
              Planting Schedule Form
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Notes and Tips</Accordion.Header>
            <Accordion.Body>
              Notes and Tips Form
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Form>
    </Container>
  )
});

export default inject('plantStore')(NewPlant);
