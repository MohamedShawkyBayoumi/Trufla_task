import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`;

export const Button = styled.button`
    background: ${props => props.active ? "palevioletred" : "#ebebeb"};
    color: ${props => props.active ? "#ebebeb" : "palevioletred"};
    cursor: pointer;
    font-size: 1em;
    margin-top: 20px;
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
    margin: 20px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
`;