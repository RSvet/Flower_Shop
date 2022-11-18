import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ProductService {
   products= [
       
        {
            id: 1,
            name: 'Beautiful Spirit Basket',
            price: 105,
            category: 'sympathy',
            image: 'assets/simpathy/product1.PNG',
            description: 'Let them know how much you care with a gorgeous bouquet that features carnations, stock, roses, lilies and Fuji mums. Each bloom is a thoughtful reminder of your support and love, while sitting in a beautifully crafted basket.'  
        },
        {
            id: 2,
            name: 'The Spathiphyllum Plant',
            price: 80,
            category: 'sympathy',
            image: 'assets/simpathy/product2.PNG',
            description: 'Everyone could use a little peace in their life! Commonly known as the peace lily, our spathiphyllum plant is a favorite among just about everyone and perfect for every occasion. This beautiful plant is long–lasting and has an amazing effect on any room with its lush leaves and white flowers.'  
        },
        {
            id: 3,
            name: 'Comfort Planter',
            price: 66,
            category: 'sympathy',
            image: 'assets/simpathy/product3.PNG',
            description:'The Comfort Planter offers unspoken words of hope and peace during this time of loss and sadness. Our stylish and sophisticated white ceramic planter holds an elegant 6\" peace lily plant, which exhibits brilliant white tear-shaped blooms amongst dark green foliage for a simply beautiful effect.'  
        },
        {
            id: 4,
            name: 'Eternal Friendship Bouquet',
            price: 100,
            category: 'sympathy',
            image: 'assets/simpathy/product4.PNG',
            description: 'An exuberance of bright and beautiful white blossoms provides an exquisite way to deliver your expressions of sympathy and comfort. This life affirming tribute combines white roses, snapdragons and Asiatic lilies accented by lush greens arranged in a clear glass 8\" vase. An excellent choice for a wake, funeral service or for sending your condolences to the home of grieving family or friends.'  
        },
        {
            id: 5,
            name: 'Long Stem Pink Rose Bouquet',
            price: 200,
            category: 'sympathy',
            image: 'assets/simpathy/product5.PNG',
            description: 'Enjoy the classic beauty of the rose with a playful twist in our Long Stem Pink Rose Bouquet. This arrangement features all pink roses that will look especially pretty in the hands of those you cherish most.'  
        },
        {            
            id: 6,
            name: 'Clear Skies Bouquet',
            price: 135,
            category: 'sympathy',
            image: 'assets/simpathy/product6.PNG',
            description: 'Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood.'     
        },
        {            
            id: 7,
            name: 'Beyond Blue Bouquet',
            price: 92,
            category: 'sympathy',
            image: 'assets/simpathy/product7.PNG',
            description: 'There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason.'     
        },
        {            
            id: 8,
            name: 'Alluring Elegance Bouquet',
            price: 115,
            category: 'sympathy',
            image: 'assets/simpathy/product8.PNG',
            description: "An illuminating array of florals brings an air of elegance to any room it's placed. This arrangement features refined florals like lilies, Queen Anne's Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions."
        },

        {            
            id: 9,
            name: 'Beach House Bouquet',
            price: 125,
            category: 'sympathy',
            image: 'assets/simpathy/product9.PNG',
            description: 'Take yourself on a seaside getaway with our Beach House Bouquet. The calming blue hydrangea is the perfect pair for the peach carnations and roses. Enjoy the fun lavender button pompons as a colorful contrast to the classic blooms.'     
        },
        {            
            id: 10,
            name: 'Pastel Peace Basket',
            price: 105,
            category: 'sympathy',
            image: 'assets/simpathy/product10.PNG',
            description: 'The Pastel Peace Basket is a sweet and simple way to offer your condolences. Lavender roses, fuchsia gerbera daisies, lavender daisies, purple larkspur, purple matsumoto asters, pink mini carnations and lush greens are arranged to perfection in a round whitewash handled basket to create a gift that expresses your wishes for sympathy and peace.'     
        },
        {            
            id: 11,
            name: 'Picnic Tulips',
            price: 70,
            category: 'sympathy',
            image: 'assets/simpathy/product11.PNG',
            description: "Celebrate mom with the classic beauty of our Picnic Tulips. These captivating colors shine brightest in spring around fun birthdays, anniversaries and as a Mother's Day surprise."     
        },
        {            
            id: 12,
            name: 'Sunshine & Joy Garden',
            price: 65,
            category: 'sympathy',
            image: 'assets/simpathy/product12.PNG',
            description: "The color yellow expresses happiness, imagination and fun, as does this garden! The perfect present for anyone on any occasion, this plant is filled to the brim with smiles. This garden is overflowing with a collection of two yellow Kalanchoes, a golden Pothos and a Croton plant. The flowers may arrive in buds, only to bloom in a short time."     
        },
        {            
            id: 13,
            name: 'Truly Stunning Bouquet',
            price: 108,
            category: 'anniversary',
            image: 'assets/anniversary/product18.PNG',
            description: 'This dreamy jewel toned bouquet combines bold color and eye catching texture to make a statement. Featuring a thoughtful array of both roses and lilies, this dazzling assortment is bound to impress your recipient.'
               
        },
        {            
            id: 14,
            name: "You're Precious Bouquet",
            price: 90,
            category: 'anniversary',
            image: 'assets/anniversary/product19.PNG',
            description: "Blushing shades of pink blooms are nestled in lush greens to charm anyone's day. This bouquet is abundant with a classic assortment of pretty florals – roses, alstroemeria and carnations to name a few."     
        },
        {            
            id: 15,
            name: "Long Stem Red Rose Bouquet",
            price: 200,
            category: 'anniversary',
            image: 'assets/anniversary/product20.PNG',
            description: "You can never go wrong with a bouquet of hand delivered long stem red roses from a local florist. Let our network of expert florists design this timeless red bouquet to make a statement for your special someone. Red flowers are an elegant, iconic and romantic gift for anyone close to your heart. Each rose is handcrafted and hand delivered to say I love you directly from a local florist to their home or office."     
        },
        {            
            id: 16,
            name: "Pretty in Pink Belgian Chocolate Truffles",
            price: 45,
            category: 'anniversary',
            image: 'assets/anniversary/product21.PNG',
            description: "Send a little piece of your heart with the Pretty in Pink Truffles. Adorably designed in heart shapes with a pink and red coating for the holiday of love, this treat comes neatly packaged with 15 truffles aligned with their shade of pink."     
        },
        {            
            id: 17,
            name: "Valentine's Day Belgian Chocolate Covered Treat Sampler",
            price: 45,
            category: 'anniversary',
            image: 'assets/anniversary/product22.PNG',
            description: "Don’t make that special someone chose this February, and send the Valentine's Day Belgian Chocolate Covered Treat Sampler instead. Try an assortment of holiday treats such as chocolate-dipped Rice Krispie® treats, chocolate cookies, mini chocolate pretzel twists, and more."          
        },
        {            
            id: 18,
            name: "Bliss White Orchid",
            price: 68,
            category: 'congratulations',
            image: 'assets/congrulations/product23.PNG',
            description:"The most popular variety of this plant, the Phalaenopsis orchid makes a great gift for plant lovers and plant beginners alike! White orchids are easy to care for and add a touch of delicate beauty to any home, office or table."
            
        },
        {            
            id: 19,
            name: "Classic White Calla Lily",
            price: 58,
            category: 'congratulations',
            image: 'assets/congrulations/product24.PNG',
            description: "This houseplant is great for making every day bright. Whether perched on a windowsill or gifted to a friend in need of a smile, the pure white tones and healthy greenery add a delicate touch to any space. This plant loves rich soil and plenty of sun."     
        },
        {            
            id: 20,
            name: "Spring fling tulip bulb garden",
            price: 45,
            category: 'congratulations',
            image: 'assets/congrulations/product25.PNG',
            description: "Grow a pop of color for the changing season with the Assorted Spring Tulip Garden blooming pink, yellow and purple flowers. Nothing revitalizes a space like fresh flowers. Packed with bold bell-shaped blooms, this bulb garden is the perfect gift for any occasion."     
        },
        {            
            id: 21,
            name: "Congrats Belgian Chocolate Covered Berry-Gram",
            price: 55,
            category: 'congratulations',
            image: 'assets/congrulations/product26.PNG',
            description: "Artisan Crafted Belgian Chocolate Covered Treats Crafted in a Small Batch Kitchen 12 Strawberries Hand Dipped in Belgian Dark Chocolate Hand Decorated with drizzles and White Chocolate Letters spelling out \"\"CONGRATS\"\" Arrives in an Elegant Gift Box"   
        },
        {            
            id: 22,
            name: "Fiesta Bouquet",
            price: 95,
            category: 'get-well',
            image: 'assets/get-well/product13.PNG',
            description: "The Fiesta Bouquet is composed of a lively mix, fit to celebrate any and every moment. With a combination of vibrant flowers, this florist–designed arrangement brings a pop of color and a burst of excitement as soon as it arrives."    
        },
        {            
            id: 23,
            name: "Alluring Elegance Bouquet",
            price: 115,
            category: 'get-well',
            image: 'assets/get-well/product14.PNG',
            description: "An illuminating array of florals brings an air of elegance to any room it's placed. This arrangement features refined florals like lilies, Queen Anne's Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions."     
        },
        {            
            id: 24,
            name: "Beyond Blue Bouquet",
            price: 92,
            category: 'get-well',
            image: 'assets/get-well/product15.PNG',
            description: "There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason."     
        },
        {            
            id: 25,
            name: "Clear Skies Bouquet",
            price: 135,
            category: 'get-well',
            image: 'assets/get-well/product16.PNG',
            description: "Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood."     
        },
        {            
            id: 26,
            name: "Light of My Life Bouquet",
            price: 80,
            category: 'get-well',
            image: 'assets/get-well/product17.PNG',
            description: "The Light of My Life Bouquet blossoms with brilliant color and a sweet sophistication to create the perfect impression! Pink Lilies make the eyes dance across the unique design of this flower bouquet, surrounded by the blushing colors of orange roses, lavender cushion poms, hot pink carnations, and lush greens. Presented in a clear glass vase, this fresh flower arrangement has been created just for you to help you send your sweetest thank you, happy anniversary, or thinking of you wishes."     
        }
   ];
    getProductbyCategory(category: string)
    {
        return  this.products.filter(function(product){return product.category == category});
    }

    getProductbyId(id: number){
        
        return this.products.filter(function(product){return product.id == id});
    }

    getPrevProduct(id:number, category:string){
        let prevProd = this.getProductbyCategory(category)
        let lastIndex = prevProd.length - 1;
        if(prevProd[0].id == id)
        return prevProd.filter(function(product){ 
            return product.id == prevProd[lastIndex].id
        })
        else
        return prevProd.filter(function(product){          
             return product.id== id-1}) 
    }        
    

    getNextProduct(id:number, category:string){
        let nextProd = this.getProductbyCategory(category);
        let lastIndex = nextProd.length - 1;
        if(nextProd[lastIndex].id == id)
        return nextProd.filter(function(product){ 
            return product.id == nextProd[0].id
        })
        else
        return nextProd.filter(function(product){return product.id == id+1})
    }

   
}