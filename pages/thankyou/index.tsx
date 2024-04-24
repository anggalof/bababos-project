import React from 'react';
import Link from 'next/link';
import withAuth from "../../utils/auth";

const ThankYou = ({ navigation }: any) => {
  const handleBack = () => {
    navigation.navigate('Home');
  };

  return (
    <div className="flex justify-center items-center py-10 md:py-32">
      <div className="p-0 md:p-20">
        <div className="text-2xl text-center font-bold">Thank You !</div>
        <div className="text-xs font-bold w-[22rem] mx-auto text-center my-5 md:w-auto md:mx-[20rem]">
          Thank you for visiting Bababos.com website and buy to our products.
          You will received an email message shortly
        </div>
        <div className="text-center">
          <i className="fa fa-check text-green-600 text-[4rem]" aria-hidden="true"></i>
        </div>
        <div className="text-lg text-center font-semibold my-5">
          Check your email
        </div>
        <div className="text-xs text-center text-black font-medium my-5 mx-[18rem] md:mx-0 px-8 md:px-0">
          If you didn't receive any mail please contact
          <span className="text-blue-500 ml-1"> info.bababos@bababos.com</span>
        </div>
        <Link href="/" className="bg-[#22A9E2] w-[20rem] flex justify-center items-center rounded-md mx-[20rem] md:w-auto p-4 mt-[20px]">
          <div className="text-white text-lg font-bold">
            Back to home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default withAuth(ThankYou);