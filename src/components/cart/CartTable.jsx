import React, { useState } from "react";

const CartTable = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "",
    },
    {
      id: 2,
      name: "Hi GamePad",
      price: 550,
      quantity: 2,
      image: "",
    },
  ]);
  const updateQuantity = (id, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };
  console.log(updateQuantity);
  return (
    <div className="w-[86%] p-4 mt-16 flex flex-col justify-between ">
      <h1 className="text-[16px] font-normal text-black mb-8 pl-2">
        Home / Cart
      </h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Product</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Quantity</th>
            <th className="p-2 text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-2 flex items-center">
                <img
                  src={"images/prdouctlcd.png"}
                  alt={product.name}
                  className="w-16 h-16 mr-4"
                />

              <span>{product.name}</span>
              </td>
              <td className="p-2">{product.price}</td>
              <td className="p-2">
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) =>
                    updateQuantity(product.id, parseInt(e.target.value))
                  }
                  className="w-16 p-1 border rounded"
                />
              </td>
              <td className="p-2">{product.quantity * product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between">
        <button className="text-[16px] font-medium w-[218px] h-[56px] bg-white border-[2px] text-black mt-8">
          Return to Shop
        </button>
        <button className="text-[16px] font-medium w-[218px] h-[56px] bg-white border-[2px] text-black mt-8">
          Update Cart
        </button>
      </div>
      <div className="w-[100%] flex justify-between border border-red-900">
        <div className="flex gap-4 mt-6">
          <button className="text-[16px] font-medium w-[218px] h-[56px] bg-white border-[2px] text-black mt-8">
            Coupon Code
          </button>
          <button className="text-[16px] font-medium w-[218px] h-[56px] bg-red-600 border-[2px] text-white mt-8">
            Apply Coupon
          </button>
        </div>
        <div>
          <div className="w-[450px] h-[280px] border-[2px] mt-12  border-red-900">
            <div className="w-full flex flex-col justify-center items-center mt-2">
              <h1 className="text-[20px] text-black font-medium p-3 ">
                Cart Total
              </h1>
              <div className="flex justify-between w-full underline text-[16px] text-black font-medium p-3">
                <p>Subtotal</p>
                <p>$1750</p>
              </div>
              <div className="flex justify-between w-full underline text-[16px] text-black font-medium p-3 mt-1">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between w-full underline text-[16px] text-black font-medium p-3 mt-1">
                <p>Total</p>
                <p>$1750</p>
              </div>
              <button className="w-[180px] h-[49px] border-[2px] rounded text-[16px] text-white bg-red-800 mb-2">
                Procees to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartTable;
