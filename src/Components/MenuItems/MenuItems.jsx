import { useEffect } from "react";
import Product from "../Product/Product";
import { getAllItems } from "../../http/http";
import { useState } from "react";

export default function MenuItems(){

    const [ fetchedMeals , setFetchedMeals ] = useState([]);

    useEffect( () => {

        async function getMeals(){
            try{
                const data = await getAllItems();
                setFetchedMeals(data);
            }
            catch(error){
                console.log(error.message);
            }

        }
        getMeals();

    } , [] )

    return(
        <ul id="meals">
            { fetchedMeals.map( (item) => (
                <Product img={"../../../backend/public/"+item.image} title={item.name} description={item.description} price={item.price} />
            ) ) }
        </ul>
    )
}