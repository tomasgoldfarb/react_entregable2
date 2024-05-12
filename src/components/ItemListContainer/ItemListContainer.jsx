import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import arrayProductos from "../../productos.jsx"
import { useParams } from "react-router-dom";

const fetchItems = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(arrayProductos)
      }, 2000)
   })
};

const ItemListContainer = () => {
   const [items, setItems] = useState([]);
   const [loading, setLoading] = useState(true);
   const { categoryId } = useParams();

   const Loading = () => {
      return (
         <div className="container my-5">
            <div className="row">
               <div className="col text-center">
                  <div className="spinner-grow text-secondary" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div>
               </div>
            </div>
         </div>
      )

   }

   useEffect(() => {
      const fetchData = async () => {
         const data = await fetchItems();
         setItems(categoryId ? data.filter(item => item.category == categoryId) : data);
         setLoading(false);
      };

      fetchData();
   }, [categoryId]);

   return (
      <div className="container my-5">
         <div className="row">
            {
               loading ? <Loading /> : <ItemList items={items} />
            }
         </div>
      </div>
   )
};

export default ItemListContainer;