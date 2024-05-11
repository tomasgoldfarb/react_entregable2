import image1 from "./assets/images/gallery01.jpg";
import image2 from "./assets/images/gallery02.jpg";
import image3 from "./assets/images/gallery03.jpg";
import image4 from "./assets/images/gallery04.jpg";
import image5 from "./assets/images/gallery05.jpg";
import image6 from "./assets/images/gallery06.jpg";

const products = [
   {
      modelo: "A20",
      marca: "Ainner",
      precio: 50000,
      img: image1,
   },
   {
      modelo: "A30",
      marca: "Ainner",
      precio: 52000,
      img: image2,
   },
   {
      modelo: "S10",
      marca: "Snauwaert",
      precio: 60000,
      img: image3,
   },
   {
      modelo: "S20",
      marca: "Snauwaert",
      precio: 62000,
      img: image4,
   },
   {
      modelo: "S30",
      marca: "Snauwaert",
      precio: 65000,
      img: image5,
   },
   {
      modelo: "S40",
      marca: "Snauwaert",
      precio: 68000,
      img: image6,
   }
]

export const getProducts = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(products)
      }, 2000)
   })
}

export const getProductById = (productId) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(products.find(item => item.modelo === productId))
      }, 2000)
   })
}

export const getProductByBrand = (productId) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(products.find(item => item.marca === productId))
      }, 2000)
   })
}