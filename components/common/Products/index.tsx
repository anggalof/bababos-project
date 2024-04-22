import React from "react";
import Link from "next/link";
import { priceSplitter } from '../../../utils/formatter/currency';
import { TProduct } from "../../../service/type";
import { Button } from "../../element/Button";
import LoaderProducts from "../../element/LoaderProducts";


export const Products = (props: any) => {
  const { data, loading } = props;
  const countLoading = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="bg-[#FDFDFD] md:pt-8 py-4 pb-2 pt-0">
      <div className="flex justify-between items-center">
        <div className="w-full mb-4">
          <div className="text-black text-base md:text-xl">Hard to choose right products for your need?</div>
          <div className="text-[#002A48] text-sm md:text-base">Take a look at some of our products</div>
        </div>
        <Button type="light" name="View More" icon="fa fa-angle-right" wSize="nope" />
      </div>
      
      <div className="item-wrap">
        {loading ? (
          countLoading.map((index) => (
            <div className="item-load__box" key={index}>
              <LoaderProducts />
            </div>
          ))
        ) : (
          data && data.length > 0 ? (
            data.map((item: TProduct) => {
              const urlTitle = item.title.split(/\W+/).filter((val) => val).join('-');
              return (
                <Link key={item.id} href={`/dashboard/detail/${item.id}/${urlTitle.toLowerCase()}`}>
                  <div className="bg-white p-2 rounded-xl overflow-hidden card-shadow">
                    <img src={item.image} alt={item.title} className="w-full object-contain rounded-[5%] flex mx-auto text-black h-[12rem] cursor-pointer image-shadow" />
                    <div className="product__title">
                      {item.title}
                    </div>
                    <div className="block md:flex text-[10px] leading-6 md:h-10 text-[#777]">
                      <div className="mx-[0.14rem] first-of-type:ml-0">
                        <span>Category:</span>
                        <span className="font-bold ml-1">{item.category}</span>
                      </div>
                      <div className="mx-[0.3rem] hidden md:block">
                        <span>&#x2022;</span>
                      </div>
                      <div className="mx-0 md:mx-[0.14rem]">
                        <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                        <span className="ml-1">{item.rating.rate}</span>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-black whitespace-normal">
                      $ {priceSplitter(item.price)}
                    </div>
                    <div className="flex mt-1">
                      <img src="/images/icons/location.png" alt="location" className="w-4" />
                      <span className="mt-[0.1rem] ml-[0.2rem] text-[#888] text-[10px]">Jakarta</span>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="not-found">
              Data not found, please try again with key that right
            </div>
          )
        )}
      </div>

      <Button type="light" name="View More" icon="fa fa-angle-right" wMobile="active" />
    </div>
  );
};
