import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const Input = styled.input`
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
`;


export const FiltersWrapper = styled.div`

`;