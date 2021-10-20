import React from "react";
import { useParams } from "react-router-dom";

type PetParams = {
  id: string;
};

function PetDetail() {
  const { id } = useParams<PetParams>();
  return (
    <div>
      <div className="wishlist__details">hello from pet details</div>
      <div>
        let's lookup pet id: <strong>{id}</strong>
      </div>
    </div>
  );
}

export default PetDetail;
