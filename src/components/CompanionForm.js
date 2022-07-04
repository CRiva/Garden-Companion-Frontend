import { Col, Row, Button, FormLabelGroup, Input, Select } from '@appfolio/react-gears';
import { observer, inject } from "mobx-react"
import Form from 'react-bootstrap/Form';

const CompanionForm = observer(({ plantStore }) => {
  const {
    companions,
    deleteCompanion,
    addCompanion
  } = plantStore;

  const showDeleteButton = companions.length > 1;

  const DeleteButton = ({ id }) => (
    <Button
      className='h-100'
      color='danger'
      onClick={()=>deleteCompanion(id)}
    >
      X
    </Button>
  );

  return (
    <div className='container'>
      <h4>Companions</h4>
      {companions.map((companion) => (
        <Row key={companion.id}>
          <Col xs={showDeleteButton ? 10 : 12} lg={showDeleteButton ? 11 : 12}>
            <Row className="mb-4">
              <Col xs={12} lg={4}>
                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm={2} lg={3}>Plant<span className="text-danger ps-1">*</span></Form.Label>
                    <Col sm={10} lg={9}>
                      <Select/>
                    </Col>
                  </Form.Group>
              </Col>
              <Col xs={12} lg={8}>
                  <Form.Group as={Row}>
                    <Form.Label column sm="2">Effect<span className="text-danger ps-1">*</span></Form.Label>
                    <Col sm={10}>
                      <Input placeholder="How does this companion effect the plant?" id="hello" />
                    </Col>
                  </Form.Group>
              </Col>
            </Row>
          </Col>
          {showDeleteButton &&
          <>
          <Col xs={2} className='pb-3 pt-4 mt-3 mb-2 d-sm-none'>
            <DeleteButton id={companion.id} />
          </Col>
          <Col xs={2} lg={1} className='pb-4 mb-lg-3 d-none d-sm-block'>
            <DeleteButton id={companion.id} />
          </Col>
          </>
          }
        </Row>
      ))}
      <Row>
        <Col xs={12} className='text-center'>
          <Button onClick={addCompanion} outline color='info' >
            Add Another Companion
          </Button>
        </Col>
      </Row>
    </div>
  )
});

export default inject('plantStore')(CompanionForm);
