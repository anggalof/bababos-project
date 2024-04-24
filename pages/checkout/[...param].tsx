import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LoaderAnimation from '../../components/element/LoaderAnimation';
import { sections } from "../../service/sections";

interface TCheckout {
  id: number;
  title: string;
  price: number;
  qty: number;
  image: string;
}

export default function Checkout() {
  const [checkout, setCheckout] = useState<TCheckout[]>([]);

  useEffect(() => {
    setCheckout(sections?.data?.checkout);
  }, [sections]);

  const countTotalPrice = (items: any) => {
    let total = 0;
    items.map((i: any) => {
      total += i.price
    })
    return total;
  }

  if (checkout.length === 0) {
    return <LoaderAnimation />;
  }

  return (
    <div className="space-container">
      <div className="text-2xl font-bold mt-10 md:mt-[2rem] mb-8">Checkout</div>
      <div className="block md:flex justify-center mb-14">
        <div className="w-full md:w-8/12 bg-white p-2 mr-10 rounded-lg mt-4 md:mt-0">
          <div className="text-lg font-bold m-2">Review your booking</div>
          {checkout.map((item: TCheckout, index: number) => {
            return (
              <div key={index}>
                <div className="flex items-center my-8 justify-between">
                  <img src={item.image} alt={item.title} className="w-14 md:w-20 h-14 px-4 object-contain" />
                  <div className="text-xs w-[10rem] md:w-[20rem]">{item.title}</div>
                  <div className="w-20">
                    <div className="text-center px-4 py-2 bg-green-200 text-xs rounded-2xl">{item.qty}</div>
                  </div>
                  <div className="text-sm mx-2 md:mx-10">${item.price}</div>
                </div>
                <div className="bg-slate-200 h-[1px] my-8"></div>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-4/12 bg-white p-2 mt-4 md:mt-0 rounded-lg">
          <div className="text-xl font-bold m-2">Price Details</div>
          <div className="text-lg font-semibold m-2">Total Shopping</div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-normal m-2">Total Price ({checkout.length} Items)</div>
            <div className="text-sm font-normal m-2">$ {countTotalPrice(checkout)}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-normal m-2">Total Shipping</div>
            <div className="text-sm font-normal m-2">$ 8</div>
          </div>
          <div className="text-lg font-semibold m-2 pt-6">Transaction Fee</div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-normal m-2">Service Fee</div>
            <div className="text-sm font-normal m-2">$ 0.8</div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold m-2 pt-6">Total Bill</div>
            <div className="text-lg font-semibold m-2 pt-6">$ 825.79</div>
          </div>
          <Link href="/thankyou">
            <div className=" rounded-lg bg-[#1f9e13] text-white text-[18px] text-center my-auto p-4 cursor-pointe hover:bg-[#12883d]">
              Buy
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
