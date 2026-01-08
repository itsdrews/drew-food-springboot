import {AnimatePresence, motion} from 'framer-motion'
import {Star,Pencil,Trash2} from 'lucide-react'
import type { FoodData } from '../../interface/FoodData'
interface CardProps{
  item:FoodData
}
 // TO DO : Adaptar o  CARD
export function Card({item}:CardProps){

  return(
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      >
      {/* Imagem da comida */}
      <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.imageUrl}
          className="w-full h-full object-cover"
          />
      </div>

      {/* Conteúdo do card */}
      <div className="p-4">
        {/* Nome da comida */}
        <h3 className="mb-1 text-xl font-handwritten font-semibold text-gray-800 text-center">
      {item.title}
          </h3>


        {/* Nome do restaurante e tipo */}
        <p className="text-gray-600 text-sm mb-3">
          {item.restaurant} • {item.type}
        </p>

        {/* Rating e Preço */}
        <div className="flex items-center justify-between">
          {/* Estrelas */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
              key={star}
              className={`w-4 h-4 ${
                star <=item.rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
              }`}
              />
            ))}
          </div>

          {/* Preço */}
          <span className="font-semibold text-green-600">
            R$ {item.price.toFixed(2)}
          </span>
        </div>

        {/* Botões de edição e exclusão */}
        <div className="flex items-center justify-end mt-3">
          <button
            className="text-blue-500 hover:text-blue-700 mr-2 cursor-pointer"
            >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            className="text-red-500 hover:text-red-700 cursor-pointer"
            >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      </motion.div>
  
  )


}