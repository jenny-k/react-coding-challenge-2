import React, { createContext, ReactNode, useState } from "react";
import { AnimalsEntity } from "./models/models";

type WishlistContextProviderProps = {
    children: ReactNode
}

export type wishlistContextProps = {
  items: AnimalsEntity[],
  inWishlist: Function,
  toggleInWishlist: Function
}

export const WishlistContext = createContext<wishlistContextProps>({
  items: [],
  inWishlist: () => {},
  toggleInWishlist: (animal:AnimalsEntity) => {}
})

function WishlistContextProvider( props:WishlistContextProviderProps ) {   

    const [ items, setItems ] = useState<AnimalsEntity[]>([]);

    function inWishlist(){
      return false;
    }

    function toggleInWishlist(animal:AnimalsEntity){
      console.log(animal);
      const tmpItems:AnimalsEntity[] = [...items];
      const index = tmpItems.findIndex( (el:AnimalsEntity)=> {
        return el.id === animal.id;
      });
      if (index > -1 ){
        tmpItems.push(animal);
      } else {
        tmpItems.splice(index,1);
      }
      console.log(tmpItems);
      setItems(tmpItems);
    }

    return (
      <WishlistContext.Provider value={{
        items: items,
        inWishlist: inWishlist,
        toggleInWishlist: toggleInWishlist
      }}>
         { props.children }
      </WishlistContext.Provider>
    );
  }
  
export default WishlistContextProvider;
  