import React, { useState, useEffect } from 'react';
import { fetch_all_products } from '../../services';
import {
    HomeWrapper,
    Button,
    Input
} from './HomeStyles';

import ProductCard from '../../components/ProductCard/ProductCard';
import InfiniteScroll from '../../components/InfiniteScroll';

const Home = () => {

    const [products, setProducts] = useState([]),
          [active, setActive] = useState(false),
          [isLoading, setIsLoading] = useState(false),
          [showLoadingBtn, setShowLoadingBtn] = useState(false),
          [page, setPage] = useState(0),
          [perPage, setPerPage] = useState(5),
          [searchKeyword, setSearchKeyword] = useState(null);
    let isCancelled = false;

    const getProducts = async () => {
        try {
            setIsLoading(true);
            let res = await fetch_all_products(page, perPage);
            if(!isCancelled){

                if(!active){
                    setProducts(
                        page > 0 ? [...products, ...res] : res
                    )
                } else {
                    setProducts(
                        res
                    )
                }
                res.length > 0 ? setShowLoadingBtn(false) : setShowLoadingBtn(true);
                setIsLoading(false);
            }
        } catch (error) {
            if(!isCancelled){
                setIsLoading(false);
            }
        }
    }

    useEffect(() => {
        getProducts();

        return () => {
            isCancelled = true;
        }
    }, [page]);

    const loadMore = () => {
        setPage(page + 1);
    }

    const promotionFilter = () => {
        setActive(!active);
        
        if(!active){
            setShowLoadingBtn(true);
            setPerPage(5);
            let filteredProducts = products && products.length > 0 && products.filter((product) => {
                let productsActive = product.promotions.length > 0 ? product.promotions.filter(p => p.active) : []
                return productsActive.length &&  {
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    department_name: product.department_name,
                    promotions: product.promotions.length > 0 ? product.promotions.filter(p => p.active) : []
                }
            });
    
            setProducts(filteredProducts)
        } else {
            setPerPage(5);
            setPage(0);
            setShowLoadingBtn(false);
            setProducts([]);
            getProducts();
            setIsLoading(false);
        }
    }

    let filteredProducts = products.filter(product => {
        if(searchKeyword == null){
            return product
        } else {
            return product.name.toLowerCase().includes(searchKeyword.toLowerCase())
        }
    });

    return (
        <HomeWrapper>
            {products.length > 0 && <Button active={active ? true : false} onClick={promotionFilter}>{active ? 'All Products' : 'Promotion filter'}</Button>}
            {products.length > 0 && <Input type='text' name='search' onChange={e => setSearchKeyword(e.target.value)} placeholder='Search by product name...' />}

            <InfiniteScroll
                loadMore={loadMore}
                products={products}
                page={page}
                showLoadingBtn={showLoadingBtn}
                isLoading={isLoading}
            >

                {filteredProducts.length ? filteredProducts.map((product) => (
                    <ProductCard {...product} key={product._id} />
                )) : (
                    <p>There is no products</p>
                )}
            </InfiniteScroll>
        </HomeWrapper>
    )
}

export default Home;