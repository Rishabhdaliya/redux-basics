// import React from "react";

const products = [
  {
    _id: "1",
    name: "Alexa 1.0",
    color: "blue",
    version: "A-99",
    image:
      "https://images-static.nykaa.com/media/catalog/product/f/7/f73b918NYLAGRL000216_1.jpg?tr=w-344,h-344,cm-pad_resize",
  },
  {
    _id: "2",
    name: "Apple Watch",
    color: "blue",
    version: "A-90",
    image:
      "https://images-static.nykaa.com/media/catalog/product/f/7/f73b918NYLAGRL000216_1.jpg?tr=w-344,h-344,cm-pad_resize",
  },

  {
    _id: "16",
    name: "iphone 1.0",
    color: "Purple",
    version: "14 pro",
    image:
      "https://images-static.nykaa.com/media/catalog/product/f/7/f73b918NYLAGRL000216_1.jpg?tr=w-344,h-344,cm-pad_resize",
  },
];

export const Code = () => {
  return (
    <div>
      {products
        .filter((elem) => elem.name === "iphone 1.0")
        .map((curElem) => (
          <div key={curElem._id}>
            <img src={curElem.image} width="100px" alt="" />
            <h4>Name: {curElem.name}</h4>
            <p>Color: {curElem.color}</p>
            <p>Version: {curElem.version}</p>
          </div>
        ))}
    </div>
  );
};
