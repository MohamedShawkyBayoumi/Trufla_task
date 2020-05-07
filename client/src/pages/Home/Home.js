import React, { useState, useEffect } from 'react';
import { fetch_all_products } from '../../services';
import {
    HomeWrapper,
    FiltersWrapper,
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

    const getProducts = async () => {
        try {
            setIsLoading(true);
            let res = await fetch_all_products(page, perPage);
            console.log(res);
            if(!active){
                setProducts(
                    page > 0 ? [...products, ...res] : res
                )
                res.length > 0 ? setShowLoadingBtn(false) : setShowLoadingBtn(true);
            }


            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, [page]);

    const loadMore = () => {
        console.log('load more');
        setPage(() => page + 1);
        console.log('page no from load more', page);
    }

    const promotionFilter = () => {
        console.log('promotionFilter');
        setActive(!active);
        
        if(!active){
            setPerPage(5);
            setShowLoadingBtn(true);
            
            let filteredProducts = products.length && products.filter((product) => {
                let productsActive = product.promotions.length ? product.promotions.filter(p => p.active) : []
                return productsActive.length &&  {
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    department_name: product.department_name,
                    promotions: product.promotions.length ? product.promotions.filter(p => p.active) : []
                }
            });
    
            setProducts(filteredProducts)
        } else {
            setPerPage(5);
            setPage(0);
            setShowLoadingBtn(false);
            getProducts();
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
            <FiltersWrapper>
                <Button active={active ? true : false} onClick={promotionFilter}>{active ? 'All Products' : 'Promotion filter'}</Button>
            </FiltersWrapper>
            <Input type='text' name='search' onChange={e => setSearchKeyword(e.target.value)} placeholder='Search by product name...' />

            <InfiniteScroll
                list={filteredProducts}
                isLoading={isLoading}
                loadMore={loadMore}
                page={page}
                showLoadingBtn={showLoadingBtn}
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