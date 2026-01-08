import { Card } from './components/Card/Card'
import { CreateModal } from './components/CreateModal/CreateModal';
import { useState } from 'react';
import type {FoodData}  from './interface/FoodData';


function App() {
  //const {data} = useFoodData(); 
  // Mock para ajustes visuais
  let data:FoodData [] = [
  {
    id: 1,
    title: 'Burger Artesanal Premium',
    restaurant: 'Burger House',
    type: 'delivery',
    rating: 5,
    price: 42.90,
    imageUrl: 'https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZm9vZHxlbnwxfHx8fDE3Njc2ODYwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Pasta Carbonara',
    restaurant: 'Trattoria Italiana',
    type: 'local',
    rating: 4,
    price: 38.50,
    imageUrl: 'https://images.unsplash.com/photo-1712746784067-e9e1bd86c043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjByZXN0YXVyYW50fGVufDF8fHx8MTc2NzY3MzE5M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Sushi Combinado',
    restaurant: 'Tokyo Sushi Bar',
    type: 'delivery',
    rating: 5,
    price: 68.00,
    imageUrl: 'https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzY3NjQyMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    title: 'Pizza Margherita',
    restaurant: 'Pizzaria Napolitana',
    type: 'local',
    rating: 4,
    price: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc2NzcxMjAwN3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    title: 'Salada Caesar',
    restaurant: 'Healthy Garden',
    type: 'delivery',
    rating: 3,
    price: 28.90,
    imageUrl: 'https://images.unsplash.com/photo-1624340209404-4f479dd59708?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2wlMjBoZWFsdGh5fGVufDF8fHx8MTc2NzY5MTM3Nnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 6,
    title: 'Bolo de Chocolate',
    restaurant: 'Doceria Doce Sabor',
    type: 'local',
    rating: 5,
    price: 22.00,
    imageUrl: 'https://images.unsplash.com/photo-1679942262057-d5732f732841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3Njc3MjQxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];
  const [itemToDelete,setItemToDelete] = useState<FoodData|null>(null);
  const [itemToEdit,setItemToEdit] = useState<FoodData|null>(null);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const handleOpenModal = () =>{
    setIsModalOpen(prev => !prev);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 mx-6">

  {/* Header */}
  <div className="flex flex-col items-center mb-8 gap-4">
  <h1 className="text-4xl font-handwritten font-bold text-gray-800 text-center">
    Cardápio de Recomendações do Drew
  </h1>

  <button
    onClick={handleOpenModal}
    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition cursor-pointer"
  >
    + Novo
  </button>
</div>


  {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
    {data.map(foodData => (
      <Card key={foodData.id} item={foodData} />
    ))}
  </div>
</div>
  
  )
}

export default App
