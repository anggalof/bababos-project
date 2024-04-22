import React, { useState, useEffect } from 'react';
import withAuth from '../../utils/auth';
import { useAppSelector, useAppDispatch } from '../../lib/hooks'
import { fetchProductList } from "../../lib/products/productListAction";
import { TProduct } from '../../service/type';
import { Products } from '../../components/common/Products';

const Dashboard: React.FC<{ products: TProduct[] }> = () => {
  const [products, setProductSection] = useState({});
  const isProductLoading = useAppSelector((state: any) => state.productList.loading);
  const productList = useAppSelector((state: any) => state.productList.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  useEffect(() => {
    setProductSection(productList);
  }, [productList]);

  return (
    <div className="bg-white py-8 px-4">
      <div className="space-container">
        <Products data={products} loading={isProductLoading} />
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
