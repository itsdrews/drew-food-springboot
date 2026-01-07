export interface FoodData {
  id?: number,
  title: string,
  restaurant:string,
  type:'delivery'| 'local',
  rating:number,
  imageUrl: string,
  price: number
}