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
  justify-content: center;
`;

export const LI = styled.li`
  margin: 0 5px;
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