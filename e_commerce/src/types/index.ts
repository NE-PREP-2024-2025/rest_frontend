
import { type ReactNode } from "react"
export enum EUserRoles {
  Admin = "ROLE_ADMIN",
  Operator = "ROLE_CUSTOMER",

}
export interface navItemTypes{
  
  name: string,
  href: string,
  
}

export interface Product{
  
  id:number,
  discount?: number,
  originalPrice?: number,
  price: number,
  category?:string,
  name: string,
  image: string,
  otherImages?: string[],
  size?: string[],
  quantity?:number,
  color?: string[],
  description?: string
  rating: number,
  rateNumber:number
}

export interface productCategory{
  title: string,
  href: string,
  icon:ReactNode
}
export interface profileInfo{
  title: string,
  href: string,
  icon:ReactNode
}

export interface cartItems extends Product{
  quantity: number,
}

export interface UploadedFile {
  file: File;
  id: string;
}
export interface productTableItem extends Product{
  date: string,
  owner: string,
  status:"Approved"|"Rejected"
}