import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  padding: 4em;
  background: #fff;
`;

export const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LI = styled.li`
  margin: 0 5px;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px;
  color: #fff;
  font-size: 18px;
  background: #000;
  text-decoration: none;
  border: 1px solid transparent;
  &:hover {
    color: #000;
    background: #fff;
    border: 1px solid #000;
  }
`;