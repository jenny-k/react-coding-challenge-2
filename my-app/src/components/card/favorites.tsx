import React  from "react"; 
import { FavoriteProps } from "../../models/models";
 

function Favorites( {index, id}:FavoriteProps ) {
   

  return (
    <div>
       hello  {index}
       id {id}
    </div>
  );
}

export default Favorites;
