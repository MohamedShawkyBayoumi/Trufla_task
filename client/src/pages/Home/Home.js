import React, { useState, useEffect } from 'react';
import { fetch_all_products } from '../../services';
import {
    CardWrapper,
    CardName,
    CardPrice,
    HomeWrapper,
    PromotionBox,
    PromotionBoxTitles,
    FiltersWrapper,
    Button
} from './HomeStyles';

const Home = () => {

    const [products, setProducts] = useState([]),
          [active, setActive] = useState(false);

    const getProducts = async () => {
        try {
            let res = await fetch_all_products();
            console.log(res);
            setProducts(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const promotionFilter = () => {
        console.log('promotionFilter');
        setActive(!active);
        
        if(!active){
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
            getProducts();
        }
    }

    return (
        <HomeWrapper>
            <FiltersWrapper>
                <Button active={active ? true : false} onClick={promotionFilter}>{active ? 'All Products' : 'Promotion filter'}</Button>
            </FiltersWrapper>
            {products.length ? products.map(({ _id, name, price, promotions }) => (
                <CardWrapper key={_id}>
                    <CardName>{name}</CardName>
                    <CardPrice>Price: {price}</CardPrice>
                    {promotions && promotions.length ? promotions.map(({ p_id, active, code, discount, discounted_price }) => {
                        return active ? (
                            <PromotionBox key={p_id}>
                                <PromotionBoxTitles>Code: {code}</PromotionBoxTitles>
                                <PromotionBoxTitles>Discount: {discount}</PromotionBoxTitles>
                                <PromotionBoxTitles>Discounted Price: {discounted_price}</PromotionBoxTitles>
                            </PromotionBox>
                        ) : null
                    }) : null}
                </CardWrapper>
            )) : (
                <p>There is no products</p>
            )}
        </HomeWrapper>
    )
}

export default Home;