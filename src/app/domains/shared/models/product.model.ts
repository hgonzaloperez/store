import { Category } from "./category.model";

export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    image?: string;
    createdAt: string;
    description: string;
    category: Category;
}   