import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import petData from "../../api/api";
import Favorites from "./favorites";
import { AnimalsEntity, FavoriteProps } from '../../models/models'
import { WishlistContext } from "../../wishlistContext";
 
function CardGrid() {

  const [animalsData, setAnimalsData] = useState<AnimalsEntity[]>([]); // strongly typing with <AnimalsEntity>
  const [favoritesData, setFavoritesData] = useState<FavoriteProps[]>([]); 
  const wishlistContext = useContext(WishlistContext);

  useEffect(() => {
    async function fetchData() {
      // never update state vars directly inside useEffect!!
      const data: AnimalsEntity[] = await petData.getAnimals(); // strongly type with : then data type (TS specific)
      setAnimalsData(data);
    }
    fetchData();
  }, []); // [] only call once



  useEffect(() => {
    console.log(animalsData);
    console.log("animal data changed");
  }, [animalsData]); // call when animalData changes

  useEffect(() => {
    console.log(favoritesData);
  }, [favoritesData]); // call when favoritesData changes

  
  function handleWishListToggle( index: any ){
    
    const animalId = animalsData[index].id;
    const tempFavorites = [...favoritesData];
    const favObject = { index: index, id: animalId}

    console.log(wishlistContext);
    
    wishlistContext.toggleInWishlist(animalsData[index]);

    tempFavorites.push(favObject);
    setFavoritesData(tempFavorites);
  }

  return animalsData.length > 0 ? (
    <ul className="d-flex wrap">
      {animalsData.map((pet, index) => (
        <li className="w-33" key={index}>
          
          <Favorites index={index} id={pet.id} />

          <div onClick={ () => handleWishListToggle(index)}>
            { pet.favorite === true ? 
              ( <div>REMOVE FROM WISHLIST</div>)
            : 
              ( <div>ADD TO WISHLIST</div>)
            }
          </div>

          <Link to={`/detail/${pet.id}`}>
            { pet.photos?[0] && <img src={pet.photos[0].medium} alt="" /> : 'Photo Coming Soon'}<br />
            {/* { hasPhoto(pet) }<br />         */}
            { pet.type } <br />
            { pet.gender } <br />
            { pet.id } <br />
            <button>Learn More</button>
          </Link>

        </li>
      ))}
    </ul>
  ) : (
    <div>The list is empty.</div>
  );
}
 

export default CardGrid;