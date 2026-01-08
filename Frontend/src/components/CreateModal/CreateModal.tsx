import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import type { FoodData } from "../../interface/FoodData";

interface InputProps{
  label: string,
  value: string | number,
  updateValue(value: any):  void
}
interface ModalProps{
  closeModal():void;
}
const Input  =({label,value,updateValue}:InputProps) => {
  return(
    <>
    <label>{label}</label>
    <input value={value} onChange={e =>updateValue(e.target.value)}></input>
    </>
  )

}



export function CreateModal({closeModal}:ModalProps){
  const [title,setTitle]= useState("");
  const [price,setPrice]= useState(0);
  const [imageUrl,setImageUrl]= useState("");
  const {mutate,isSuccess}= useFoodDataMutate();
  const submit =() =>{
    const foodData:FoodData ={
      title,
      price,
      imageUrl
    }
    mutate(foodData)
  }
  useEffect(() =>{

    if(!isSuccess) return;
    closeModal();

  },[isSuccess])
  return(
    <div className="modal-overlay">

      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio </h2>
        <form  className="input-container" action="">
          <Input label="title" value={title} updateValue={setTitle}></Input>
          <Input label="price" value={price} updateValue={setPrice}></Input>
          <Input label="image URL" value={imageUrl} updateValue={setImageUrl}></Input>
        </form>
          <button onClick={submit} className="button-secondary">Criar</button>
      </div>
    </div>
  )






}