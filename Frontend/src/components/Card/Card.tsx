import './Card.css'
interface CardProps{
  price: number,
  title: string,
  imageUrl: string,
}

export function Card({price,title,imageUrl}: CardProps){
  return(
    <div className="card">
      
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <p><b>Valor: R$ {price} </b></p>
    </div>
  )


}