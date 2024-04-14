import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function CardItem({itemsData}) {
  return (

    <Row>    
      {
        itemsData.length >= 1 ? (itemsData.map((item)=>{
          return(
            <Col key={item.id} sm="12" className='mb-3'>
            <Card className='d-flex flex-row card'>
                <Card.Img variant="top" src={item.imgUrl} className='img'/>
                <Card.Body>
                  <Card.Title>
                    <div className='d-flex justify-content-between'>
                        <div>{item.title}</div>
                        <div className='text'>{item.price}</div>
                    </div>
                    </Card.Title>
                  <Card.Text>
                    {item.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
          )
      })) :<h2>لآيوجد اي اصناف الرجاء المحاوله لاحقا</h2>
      }
        
    </Row>
  )
}
