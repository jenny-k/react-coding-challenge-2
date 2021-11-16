import { AnimalsEntity } from "../models/models";
import { Client } from "@petfinder/petfinder-js";

// const PET_API_URL = "https://api.petfinder.com/v2/animals?type=dog&page=2";
const API_KEY = process.env.REACT_APP_API_KEY || "";
const API_SECRET = process.env.REACT_APP_API_SECRET || "";
const petFinderData = new Client({ apiKey: API_KEY, secret: API_SECRET });

const petData = {
  getAnimals: async function ( ): Promise<AnimalsEntity[]> {
    try {
      const results = await petFinderData.animal.search({
        location: 43571,
        distance: 300,
        sort: 'distance'
      });

      if (results?.data?.animals) { 
        return results.data.animals;
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log("Error loading animals");
    }

    return [];
  },

  getAnimal: async function (id:number): Promise<AnimalsEntity | undefined> {
    try {
      const results = await petFinderData.animal.show(id);

      if (results?.data?.animal) {
        return results.data.animal;
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log("Error loading animals");
    }

    return;
  },



  // getAnimals: async (): Promise<AnimalsEntity[]> => {
  //   return new Promise((resolve,reject)=> {
  //     petFinderData.animal
  //     .search()
  //     .then(function (response) {
  //       const data = response.data.animals;
  //       // console.log(data); -- data ok
  //       resolve(data);
  //     })
  //     .catch(function (error) {
  //       // Handle the error
  //       console.log("there was an error fetching");
  //       reject(error);
  //     });
  //   });
    
    
  // },
};
export default petData;
