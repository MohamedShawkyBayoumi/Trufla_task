import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardWrapper = styled.div`
    border-radius: 10px;
    box-shadow: 0 0 5px #d9d9d9;
    background-color: #fafafa;
    width: 70%;
    margin: 10px;
    padding: 10px 20px;
`;

export const CardName = styled.h3`
    
`;

export const CardPrice = styled.h4`
    
`;

export const PromotionBox = styled.div`
    display:flex;
    justify-content: space-around;
    border-radius: 5px;
    border: 1px dotted #ccc;
    padding: 5px;
`;

export const PromotionBoxTitles = styled.h3`
    margin: 0;
    font-size: 14px;
`;

export const FiltersWrapper = styled.div`
    
`;

export const Button = styled.button`
    background: ${props => props.active ? "palevioletred" : "#ebebeb"};
    color: ${props => props.active ? "#ebebeb" : "palevioletred"};
    cursor: pointer;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    &:hover {
        color: #ebebeb;
        background: palevioletred;
    }
`;