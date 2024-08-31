import React from "react";
import { CardContainer, CardBody, CardItem } from "./3DContainer";

const DCard = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <CardContainer key={index} className="lg:w-[30rem] md:w-[30rem] sm:w-full h-80 sm:h-96 bg-gray-800 rounded-lg shadow-lg">
          <CardBody className="relative p-3">
            <CardItem translateZ={80} className="w-full h-40 mb-4">
              <img
                src={`src/assets/shoe-${index + 1}.png`}
                alt={`product ${index + 1}`}
                className="w-full h-[20rem] object-cover rounded-md"
              />
            </CardItem>
            <CardItem translateZ={20} className="mb-2">
              <h2 className="text-2xl font-semibold text-white shadow-2xl">Product Name {index + 1}</h2>
            </CardItem>
            <CardItem translateZ={10} className="font-bold text-gray-400">
              <p>Description</p>
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  </div>
  );
};

export default DCard;
