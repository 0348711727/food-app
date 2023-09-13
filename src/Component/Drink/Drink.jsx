import { useEffect, useRef, useState } from 'react';
import './drink.css';
import Loading from '../Loading/Loading';
import { useLoading } from '../../customHooks/useLoading';
import { useDisable } from '../../customHooks/useDisable';
import { callApi } from '../../service/apiService';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Carousel } from 'antd';
import { FormatLocaleNumber } from '../../Utils/formatLocaleNumber';
import { Tooltip } from 'react-tooltip';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.webp';
import banner3 from '../../assets/banner3.webp';
import banner4 from '../../assets/banner4.webp';
import banner5 from '../../assets/banner5.webp';


const Drink = () => {
  const titleRef = useRef();
  const [file, setFile] = useState('');
  let { isLoading, setIsLoading } = useLoading(false);
  let { isDisabled, setIsDisabled } = useDisable(false);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await callApi({ url: 'http://localhost:5000/api/product/getAllProduct', method: 'get' })
        setProduct(res.data.data)
        setIsLoading(false);
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, []);

  // const memoizedProduct = useMemo(() => product, [product]);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    setIsDisabled(true);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', titleRef.current.value);
    try {
      // const res = await callApi({ url: 'http://localhost:5000/api/product/getAllProduct', method: 'get', config: { headers: { 'Content-Type': 'multipart/form-data' } } })
      // setProduct(res.data.data)
      const res = await callApi({ url: 'http://localhost:5000/api/product/addProduct', method: 'post', body: formData, config: { headers: { 'Content-Type': 'multipart/form-data' } } })
      setProduct(res.data.data)
    } catch (error) {
      // console.log(error)
    }
    setIsLoading(false);
    setIsDisabled(false);
  }
  return (
    <>
      <Tooltip id="my-tooltip" />
      <div className='carousel'>
        <Carousel autoplay>
          {
            [banner1, banner2, banner3, banner4, banner5].map((value, index) => (
              <div className='menu_item_carousel' key={index}>
                <a data-tooltip-id="my-tooltip" data-tooltip-content='a' href='/collections/all'>
                  <LazyLoadImage className='lazyloaded' key={value} src={value} alt='banner' />
                </a>
              </div>
            ))
          }
        </Carousel>
      </div>
      <section className='menu_list_home flex_wrap display_flex'>
        {/* <form>
          <div className="form-group">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control-file" name="uploaded_file" disabled={isDisabled} />
            <input type='text' ref={titleRef} disabled={isDisabled} />
            <button onClick={handleSubmit} type="button" className="btn btn-default" disabled={isDisabled} >submit</button>
          </div>
        </form> */}
        <div className='menu_item menu_banner'>
          <a data-tooltip-id="my-tooltip" data-tooltip-content='Trà xanh tây bắc' href='/'>
            <LazyLoadImage className='lazyloaded' alt="Trà xanh tây bắc" src='https://file.hstatic.net/1000075078/file/banner_app_2_c3dea7cad7cb4fad94f162ea6ccd388b.jpg' />
          </a>
        </div>
        {
          product && product.map(({ imageName, title, price, _id }, index) => (
            <div className='menu_item' key={index}>
              <div className='menu_item_image'>
                <a data-tooltip-id="my-tooltip" data-tooltip-content={title} href={`/product/${imageName}`}>
                  <LazyLoadImage className='lazyloaded' effect="blur" key={imageName} src={`https://d3jgp7w89aozly.cloudfront.net/food-image/${imageName}.webp`} alt='drink' />
                </a>
              </div>
              <div className='menu_item_info'>
                <h3>{title}</h3>
                <div className='price_product_item'>
                  {FormatLocaleNumber(price)} đ
                </div>
              </div>
            </div>
          ))
        }
        {
          isLoading && <Loading />
        }
      </section>
    </>
  );
}

export default Drink;