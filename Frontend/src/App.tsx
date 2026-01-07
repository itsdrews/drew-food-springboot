import './App.css'
import { Card } from './components/Card/Card'
import { CreateModal } from './components/CreateModal/CreateModal';
import { useFoodData } from './hooks/useFoodData';
import { useState } from 'react';
import type {FoodData}  from './interface/FoodData';


function App() {
  const {data} = useFoodData();
  const [itemToDelete,setItemToDelete] = useState<FoodData|null>(null);
  const [itemToEdit,setItemToEdit] = useState<FoodData|null>(null);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const handleOpenModal = () =>{
    setIsModalOpen(prev => !prev);
  };

  return (
    <div className="app-wrapper">

      <h1>
        Cardápio do Drew
      </h1>
      <div  className="card-grid">
            {data?.map(foodData =>
            foodData.imageUrl?
            <Card 
            key={foodData.id}
            price ={foodData.price} 
            imageUrl = {foodData.imageUrl} 
            title ={foodData.title}
            />:'')}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Novo</button>

    </div>
  )
}

export default App
