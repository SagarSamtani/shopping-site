import React from "react";
import renderer from "react-test-renderer";
import Product from "./index";

const mockProductData = {
  id: 2,
  name: "Wallet",
  image: "wallet.png",
  price: "299",
  currency: "₹",
  description: "It is Woodland wallet"
};

const mockCartFunc = paramProduct => {
  console.log("paramProduct", paramProduct);
};

describe("Counter", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <Product
        key={mockProductData.id}
        productInfo={mockProductData}
        onClickHandler={() => {
          mockCartFunc(mockProductData);
        }}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
