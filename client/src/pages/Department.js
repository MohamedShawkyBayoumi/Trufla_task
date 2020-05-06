import React, { useState, useEffect } from 'react';
import { fetch_single_department_products } from '../services';
import ProductCard from '../components/ProductCard/ProductCard';
import { HomeWrapper } from '../pages/Home/HomeStyles';
import InfiniteScroll from '../components/InfiniteScroll';

const Department = ({ match: { params: { department_id } } }) => {

    const [products, setProducts] = useState([]),
          [isLoading, setIsLoading] = useState(false),
          [page, setPage] = useState(0),
          [perPage, setPerPage] = useState(5);

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch_single_department_products(department_id);
                console.log(res);
                setProducts(res);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [department_id]);

    const loadMore = () => {
        console.log('load more');
        setPage(() => page + 1);
        console.log('page no from load more', page);
    }

    return (
        <HomeWrapper>
            

            {/* <InfiniteScroll
                list={products}
                isLoading={isLoading}
                loadMore={loadMore}
                page={page}
            >

                {products.length ? products.map((product) => (
                    <ProductCard {...product} key={product._id} />
                )) : (
                    <p>There is no products</p>
                )}
            </InfiniteScroll> */}
            {products.length ? products.map((product) => (
                <ProductCard {...product} key={product._id} />
            )) : (
                <p>There is no products</p>
            )}
        </HomeWrapper>
    )
}

export default Department
