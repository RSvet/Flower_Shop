export class Cart{
    constructor(
        public id: number,
        public selectedProduct: {id: number, name:string, price: number, category: string, image: string, description: string},
        public quantity: number
    ){}
}