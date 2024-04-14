import { Row, Col} from 'react-bootstrap'
import React from 'react'

export default function Category({filterByCategory,allCategory}) {
  // const onFilter=(cat)=>{
  //   filterByCategory(cat)
  // }
  return (
    <Row className='my-2 mb-5'>
           <Col sm="12" className='justify-content-center d-flex'>
            {
              allCategory.length >= 1 ? (allCategory.map((cat)=>{
                return(
              <div>
                <button onClick={()=> filterByCategory(cat)} className='btn btn-warning mx-2'>{cat}</button>
            </div> 
              )})) : <h2>لايوجد تصنيفات الأن</h2>
            }
            
           </Col> 
    </Row>

  )
}
