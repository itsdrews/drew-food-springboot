import { Card } from './components/Card/Card'
import { CreateModal } from './components/CreateModal/CreateModal';
import { useState } from 'react';
import type {FoodData}  from './interface/FoodData';
import { EditModal } from './components/EditModal/EditModal';
import { ToastContainer } from './components/Toast/ToastContainer';
import { ConfirmDeleteToast } from './components/Toast/ConfirmDeleteToast';
import { SuccessToast } from './components/Toast/SuccessToast';
import { useFoodDataDelete } from './hooks/useFoodDataDelete';
import { useFoodData } from './hooks/useFoodData';



function App() {


  //const {data} = useFoodData(); 
  // Mock para ajustes visuais
 
  /*
  let data:FoodData [] = [
  {
    id: 1,
    title: 'Burger Artesanal Premium',
    restaurant: 'Burger House',
    type: 'DELIVERY',
    rating: 5,
    price: 42.90,
    imageUrl: 'https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZm9vZHxlbnwxfHx8fDE3Njc2ODYwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Pasta Carbonara',
    restaurant: 'Trattoria Italiana',
    type: 'LOCAL',
    rating: 4,
    price: 38.50,
    imageUrl: 'https://images.unsplash.com/photo-1712746784067-e9e1bd86c043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjByZXN0YXVyYW50fGVufDF8fHx8MTc2NzY3MzE5M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Sushi Combinado',
    restaurant: 'Tokyo Sushi Bar',
    type: 'DELIVERY',
    rating: 5,
    price: 68.00,
    imageUrl: 'https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzY3NjQyMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    title: 'Pizza Margherita',
    restaurant: 'Pizzaria Napolitana',
    type: 'LOCAL',
    rating: 4,
    price: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc2NzcxMjAwN3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    title: 'Salada Caesar',
    restaurant: 'Healthy Garden',
    type: 'DELIVERY',
    rating: 3,
    price: 28.90,
    imageUrl: 'https://images.unsplash.com/photo-1624340209404-4f479dd59708?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2wlMjBoZWFsdGh5fGVufDF8fHx8MTc2NzY5MTM3Nnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 6,
    title: 'Bolo de Chocolate',
    restaurant: 'Doceria Doce Sabor',
    type: 'LOCAL',
    rating: 5,
    price: 22.00,
    imageUrl: 'https://images.unsplash.com/photo-1679942262057-d5732f732841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3Njc3MjQxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];*/
  const [itemToDelete,setItemToDelete] = useState<FoodData|null>(null);
  const [itemToEdit,setItemToEdit] = useState<FoodData|null>(null);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [selectedFood,setSelectedFood] = useState<FoodData| null>(null);
  const [toast, setToast] = useState<React.ReactNode | null>(null);
  const handleOpenModal = () =>{
    setIsModalOpen(prev => !prev);
  };
  const { mutate: deleteFood } = useFoodDataDelete();
  let {data,isLoading,isError} = useFoodData();
  function handleDelete(food: FoodData) {
  setToast(
    <ConfirmDeleteToast
      title={food.title}
      onCancel={() => setToast(null)}
      onConfirm={() => {
        deleteFood(food.id, {
          onSuccess: () => {
            setToast(
              <SuccessToast message="Item excluído com sucesso!" />
            );
            setTimeout(() => setToast(null), 2500);
          },
        });
      }}
    />
  );
  }
  return (
    
     
<div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 mx-6 flex">

  {/* LADO ESQUERDO — DESCRIÇÃO */}
  <div className="w-1/2 flex flex-col justify-center pr-8 bg-center bg-cover"
  style={{
    backgroundImage:"url('/public/background.png')"
  }}>
    <h1 className="text-4xl font-handwritten font-bold text-black-800 mx-auto my-">
      Cardápio de Recomendações do Drew
    </h1>

    <p className="text-black-600 text-lg mx-auto">
   Recomendações gastronômicas selecionadas de forma simples e intuitiva.
    </p>

    <button
      onClick={handleOpenModal}
      className="bg-blue-600 text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition w-fit cursor-pointer mx-auto"
    >
      + Novo
    </button>
  </div>

  {/* LADO DIREITO — CARDS COM SCROLL */}
  <div className="w-1/2 h-screen overflow-y-auto pl-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10">
      {data && data.length === 0 && (
  <p className="text-center text-gray-500 mt-6">
    🍽️ Cardápio vazio no momento
  </p>
)}
      {data?.map(foodData => (
        <Card
          key={foodData.id}
          item={foodData}
          onEdit={setItemToEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  </div>

  {/* MODAIS */}
  {isModalOpen && <CreateModal closeModal={() => setIsModalOpen(false)} />}

  {itemToEdit && (
    <EditModal
      food={itemToEdit}
      closeModal={() => setItemToEdit(null)}
    />
  )}

  <ToastContainer>{toast}</ToastContainer>
</div>

  

)
}

export default App
