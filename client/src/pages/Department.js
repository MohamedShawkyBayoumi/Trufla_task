import React, { useState, useEffect } from 'react';
import { fetch_single_department_products } from '../services';
import ProductCard from '../components/ProductCard/ProductCard';
import { HomeWrapper } from '../pages/Home/HomeStyles';

const Department = ({ match: { params: { department_id } } }) => {

    const [products, setProducts] = useState([]);
    let isCancelled = false;

    const getSingleDept = async () => {
        try {
            let res = await fetch_single_department_products(department_id);
            if(!isCancelled){
                setProducts(res);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleDept();

        return () => {
            isCancelled = true;
        }
    }, [department_id]);

    return (
        <HomeWrapper>
            {products.length ? products.map((product) => (
                <ProductCard {...product} key={product._id} />
            )) : (
                <p>There is no products</p>
            )}
        </HomeWrapper>
    )
}

export default Department
