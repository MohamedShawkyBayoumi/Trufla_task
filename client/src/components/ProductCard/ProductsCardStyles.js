import styled from 'styled-components';

export const CardWrapper = styled.div`
    border-radius: 10px;
    box-shadow: 0 0 5px #d9d9d9;
    background-color: #fafafa;
    width: 70%;
    margin: 10px;
    padding: 10px 20px;
`;

export const CardName = styled.h3`
    border-left: 5px solid rgb(219, 112, 147);
    padding-left: 10px;
    color: rebeccapurple;

`;

export const CardPriceDepartmentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CardPrice = styled.h4`
    background-color: palevioletred;
    padding: 5px 10px;
    color: #fff;
    font-weight: bold;
`;

export const CardDepartmentName = styled.h4`
    background-color: papayawhip;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 5px;
`;

export const PromotionBox = styled.div`
    display:flex;
    justify-content: space-around;
    border-radius: 5px;
    border: 2px dotted #ccc;
    padding: 5px;
    background: rgb(251, 238, 242);
`;

export const PromotionBoxTitles = styled.h3`
    margin: 0;
    font-size: 14px;
`;
