import { Container } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Category from './Components/Category';
import CardItem from './Components/CardItem';
import { ApiItems } from './ApiItems';
import { useState } from 'react';
function App() {
  const [itemsData,setItemsData]=useState(ApiItems)
  const allCategory =['الكل',...new Set(ApiItems.map((i)=> i.category))]
  
  const filterBySearch=(word)=>{

    if(word !==""){
      const newArray = ApiItems.filter((item)=> item.title===word)
      setItemsData(newArray)
    }

  }
  const filterByCategory=(cat)=>{

    if(cat === "الكل"){
      setItemsData(ApiItems)
    }else{
      const newArray = ApiItems.filter((item)=> item.category===cat)
      setItemsData(newArray)
    }


  }
  return (
    <div>
      <NavBar filterBySearch={filterBySearch} filterByCategory={filterByCategory}/>
      <Container>
      <Header/>
      <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
      <CardItem itemsData={itemsData}/>
      {/* <ApiItems/> */}
      </Container>
    </div>
  );
}

export default App;
