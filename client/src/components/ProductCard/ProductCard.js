import React from 'react';
import {
    CardWrapper,
    CardName,
    CardPrice,
    PromotionBox,
    PromotionBoxTitles,
    CardDepartmentName,
    CardPriceDepartmentWrapper
} from './ProductsCardStyles';

const ProductCard = ({ name, price, promotions, department_name }) => (
    <CardWrapper>
        <CardName>{name}</CardName>
        <CardPriceDepartmentWrapper>
            <CardPrice>Price: {price}</CardPrice>
            <CardDepartmentName>{department_name.toUpperCase()}</CardDepartmentName>
        </CardPriceDepartmentWrapper>
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
);

export default ProductCard;