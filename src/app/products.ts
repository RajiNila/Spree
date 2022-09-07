export interface Product {
    id: number;
    name: String;
    price: number;
    description: string;
}


export const products= [
 
    {
        id: 1,
        name: "Necklaces",
        price: 300,
        imgsrc:'assets/1.jpg',
        description: "A branded new Neclace collections"
    },
    {
        id: 2,
        name: "Earrings",
        price: 200,
        imgsrc:'assets/3.jpg',
        description: "Beautiful Earring collections"
    },
    {
        id: 3,
        name: "Rings",
        price: 150,
        imgsrc:'assets/5.jpg',
        description: "Beautiful Ring collections"
    },
    {
        id: 4,
        name: "Bangles",
        price: 250,
        imgsrc:'assets/7.jpg',
        description: "Royal look collections of Bangles at lower price"
    }
    
];
