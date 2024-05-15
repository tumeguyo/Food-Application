export class Food{
[x: string]: any;
    id!: number;
    name!: string;
    price!: number;
    description!: string;
    tags?: string[];
    favorite!: boolean;
    stars!: number;
    imageUrls!: string;
    origins!: string[];
    cookTime!: string;  
}