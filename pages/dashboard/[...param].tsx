import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { sections } from "../../service/sections";
import Breadcrumb from '../../components/common/Breadcrumb';
import LoaderAnimation from '../../components/element/LoaderAnimation';
import { TProduct } from '../../service/type';
import withAuth from "../../utils/auth";
import { useAppSelector, useAppDispatch } from '../../lib/hooks'
import { fetchProductDetail } from "../../lib";

export function Product() {
  const [product, setProductSection] = useState<TProduct>({
    id: 0, title: "", price: 0, description: "", category: "", image: "", rating: {
      rate: 0,
      count: 0,
    }
  });
  const [dataTab, setTabDetail] = useState('info');
  const [shipping, setShipping] = useState([]);
  const [moreDetail, setMoreDetail] = useState(true);
  const [moreTitle, setMoreTitle] = useState('Lihat Selengkapnya');
  const productDetail = useAppSelector((state: any) => state.productDetail.data);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (router.query && router.query.param) {
      dispatch(fetchProductDetail(router.query.param[1]));
    }
  }, [router.query]);

  useEffect(() => {
    setProductSection(productDetail);
    setShipping(sections?.data?.shipping);
  }, [productDetail]);

  const handleMore = () => {
    setMoreDetail(!moreDetail);
    if (moreTitle === 'Lihat Selengkapnya') {
      setMoreTitle('Lihat Lebih Sedikit');
    } else {
      setMoreTitle('Lihat Selengkapnya');
    }
  };

  const handleClick = (tab: any) => {
    setTabDetail(tab);
  };

  if (Object.keys(product).length === 0) {
    return <LoaderAnimation />;
  }

  return (
    <div className="mx-auto bg-white pb-16">
      <Breadcrumb titleGeneral={product.title} />

      <div className="space-container">
        <div className="product-detail__wrapper">
          <div className="product-detail__view">
            <div className="product-detail__image">
              <div className="product-detail__grid-image">
                <div className="product-detail__default">
                  <img src={product.image} alt={product.title} width={88} height={88} />
                </div>
              </div>
            </div>
            <div className="product-detail__content">
              <h2>{product.title}</h2>
              <div className="product-detail__see">
                <i className="fa fa-eye"></i> 1820x dilihat
              </div>
              <div className="product-detail__price">
                <div className="product-detail__price-varian">
                  $ {product.price}
                </div>
              </div>
              <div className="product-detail__order">
                <div className="product-detail__order-button">
                  Add to Cart
                </div>
              </div>
              <div className="product-detail__tab">
                <div
                  className={`product-detail__tab-title ${dataTab === 'info' && 'product-detail__tab-active'}`}
                  onClick={() => handleClick('info')}>
                  Information
                </div>
              </div>
              <div className="product-detail__line"></div>
              {dataTab === 'info' && (
                <>
                  <div className="product-detail__box-info">
                    <div className="product-detail__verified-wrapper">
                      <div className="product-detail__verified-content">
                        <img
                          src="/images/icons/icon-verified.png"
                          alt="verified"
                          width={14}
                          height={14}
                        />
                        <span>Verified</span>
                      </div>
                      <div className="product-detail__verified-desc">
                        Safe and Reliable Transactions at Bababos
                      </div>
                    </div>
                    <div className="product-detail__info">
                      <span>Category</span>
                      <span>: {product.category}</span>
                    </div>
                    <div className="product-detail__info">
                      <span>Condition</span>
                      <span className="variant-color">: New</span>
                    </div>
                    <div className="product-detail__info">
                      <span>Warranty</span>
                      <span>: Claims are available if there is an unboxing video</span>
                    </div>
                  </div>
                  <div className="product-detail__line" />
                  <div className="product-detail__content-info">
                    <div
                      className={`${
                        moreDetail ? 'product-detail__content-desc' : 'product-detail__content-description'
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: 
                          "Barang di jamin baru dan harga bersaing bisa dibilang lebih murah. <br /><br />Jadi jangan ragu untuk beli dikita, bisa tanya-tanya seputar produk yang ingin di beli secara free. Barang juga siap dikirim untuk seluruh pengiriman di Indonesia sampai langsung ke depan rumah Anda."
                      }}
                    />
                  </div>
                  <div className="product-detail__desc-more" onClick={handleMore}>
                    {moreTitle}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="product-detail__information">
            <div className="product-detail__box-info">
              <h2>Delivery</h2>
              <div className="product-detail__send-from">
                <img src="/images/icons/location.png" alt="location" className="product-detail__location-img" />
                <span>Shipped from</span>
                <span>Jakarta</span>
              </div>
              <div className="product-detail__shipping">
                {shipping.map((cargo: any, index: number) => {
                  return (
                    <div key={index}>
                      <div className="product-detail__shipping-info">
                        <img src={cargo.image} alt="cargo-delivery" width={128} height={96} />
                        <div className="product-detail__shipping-desc">
                          <div>via {cargo.name}</div>
                          <label>
                            <i className="fa fa-check"></i>Available
                          </label>
                        </div>
                      </div>
                      {shipping.length !== index + 1 &&
                        <div className="product-detail__line"></div>
                      }
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuth(Product)
