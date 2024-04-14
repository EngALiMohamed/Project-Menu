import React, { useState } from 'react'
import { Row,Container ,Button , Form ,Nav ,Navbar,} from 'react-bootstrap'

export default function NavBar({filterBySearch ,filterByCategory}) {
  const [search,setSearch]=useState('')
  const onSearch=()=>{
    filterBySearch(search)
    filterByCategory(search)
    setSearch('')  
  }
  return (
    <Row>
        <Navbar expand="lg" bg="dark" variant='dark'>
      <Container >
        <Navbar.Brand href="#" className='text-warning fs-4 fw-bolder'>مطعم الزقازيقي</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder=" ابحث عن :-"
              className="mx-2"
              onChange={(e)=>setSearch(e.target.value)}
              value={search}
              onKeyUp={(e)=>setSearch(e.target.value)}

            />
            <Button onClick={()=>onSearch()} variant="outline-warning ">بحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}
