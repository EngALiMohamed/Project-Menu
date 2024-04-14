import React from 'react'
import { Row, Col} from 'react-bootstrap'

export default function Header() {
  return (
    <Row>
        <Col sm="12"className='justify-content-center text-center'>
        <div className='title '> قائمة الطعام</div>
        <div className="justify-content-center d-flex">
            <p className='line'></p>
        </div>
        </Col>
    </Row>
  )
}
