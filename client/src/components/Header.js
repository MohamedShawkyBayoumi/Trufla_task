import React, { useState, useEffect } from 'react';
import { fetch_departments } from '../services';
import { Wrapper, UL, LI, NavLink } from './HeaderStyles';

const Header = () => {

    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch_departments();
                setDepartments(res);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <Wrapper>
            {departments.length ? (
                <UL>
                    <LI>
                        <NavLink to='/'>Home</NavLink>
                    </LI>
                    {departments.map(({ _id, name }) => (
                        <LI key={_id}>
                            <NavLink to={`/department/${_id}`}>{name}</NavLink>
                        </LI>
                    ))}
                </UL>
            ) : (
                <p style={{ textAlign: 'center' }}>There is no departments</p>
            )}
        </Wrapper>
    )
}

export default Header;