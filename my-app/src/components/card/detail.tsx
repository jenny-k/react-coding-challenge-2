import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import petData from "../../api/api";
import { AnimalsEntity } from '../../models/models'

type PetParams = {
  id: string
};

function CardDetail() {
  const [animalData, setAnimalData] = useState<AnimalsEntity>(); // strongly typing with <AnimalsEntity>
  const { id } = useParams<PetParams>();  
  

  useEffect(() => {
    async function fetchData() {      
      // never update state vars directly inside useEffect!!
      const data = await petData.getAnimal(parseInt(id));       
      setAnimalData(data);
    }
    fetchData();
  }, [id]);  

  
  useEffect(() => {
    console.log(animalData);
    console.log("animal data changed");
  }, [animalData]); // call when animalData changes
   

  return (
    <div>
      <div className="wishlist__details">hello from pet details</div>
      <div>
        let's lookup pet id: <strong>{id}</strong>
       
         { 
          animalData ?
            <><div>we have animal data</div>
              <p>
              Name: {animalData.name}<br />
              Description: {animalData.description}<br />
              Age: {animalData.age}<br />
              Breed(s): 
                { animalData.breeds?.primary && animalData.breeds.primary }
                { animalData.breeds?.secondary && ', ' + animalData.breeds.secondary }
                { animalData.breeds?.mixed && ', Mixed Breed' }
                { animalData.breeds?.unknown && ', Breed Unknown' }
              </p>
              {
                animalData.photos?.map((elem, index)=>{
                  return <div><img src={elem.medium} alt="" key={index} /></div>
                })
              }
              { animalData.url && <button><a href={animalData.url} target="_blank" rel="noreferrer">Learn More</a></button>}
            </>
          : null
        }

      </div>
    </div>
  );
}

export default CardDetail;
