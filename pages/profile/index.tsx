import React, { useState, useEffect } from 'react';
import LoaderAnimation from '../../components/element/LoaderAnimation';
import { sections } from "../../service/sections";
import { THistory, TProfile } from "../../service/type";
import { stat } from 'fs';


export default function Profile() {
  const [profile, setProfile] = useState<TProfile>({
    image_url: "",
    company_name: "",
    address: "",
    company_information: "",
    transaction_history: []});

  useEffect(() => {
    setProfile(sections?.data?.profile);
  }, [sections]);

  if (Object.keys(profile).length === 0) {
    return <LoaderAnimation />;
  }

  const bgColor = (status: string) => {
    let labelColor = "";
    if (status === "Pending") {
      labelColor = "bg-[#ffe7ba]";
    } else if (status === "Paid") {
      labelColor = "bg-blue-200";
    } else {
      labelColor = "bg-green-200";
    }
    return labelColor;
  }

  return (
    <div className="space-container">
      <div className="block md:flex justify-center mt-10 md:mt-[4rem] mb-14">
        <div className="w-full md:w-6/12 bg-white mr-10 p-2 rounded-lg">
          <div className="flex items-center">
            <img src={profile.image_url} className="w-32 object-cover h-18 mr-4" alt="Seller Logo" />
            <span className="text-xl font-semibold">{profile.company_name}</span>
          </div>
          <div className="bg-slate-200 h-[1px] my-8"></div>
          <div className="px-4">
            <div className="text-2xl mb-2">Address</div>
            <div className="text-base">{profile.address}</div>
          </div>
          <div className="bg-slate-200 h-[1px] my-8"></div>
          <div className="px-4 pb-8">
            <div className="text-2xl mb-2">Company Information</div>
            <div className="text-base">{profile.company_information}</div>
          </div>
        </div>
        <div className="w-full md:w-6/12 bg-white p-2 rounded-lg mt-4 md:mt-0">
          {profile.transaction_history.map((item: THistory, index: number) => {
            return (
              <div key={index}>
                <div className="flex items-center my-8">
                  <img src={item.image} alt={item.title} className="w-14 h-14 px-4 object-contain" />
                  <div className="text-xs w-[10rem] md:w-[20rem]">{item.title}</div>
                  <div className="w-20">
                    <div className={`text-center px-4 py-2 ${bgColor(item.status)} text-xs rounded-2xl`}>{item.status}</div>
                  </div>
                  <div className="text-sm ml-2">${item.price}</div>
                </div>
                <div className="bg-slate-200 h-[1px] my-8"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
