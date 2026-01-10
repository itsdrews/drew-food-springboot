export interface FoodData {
  id: number,
  title: string,
  restaurant:string,
  type:'DELIVERY'|'LOCAL',
  rating:number,
  imageUrl: string,
  price: number
}