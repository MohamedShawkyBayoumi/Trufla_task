import React, { useState, useEffect } from 'react';
import { fetch_single_department } from '../services';

const Department = ({ match: { params: { department_id } } }) => {

    const [department, setDepartment] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch_single_department(department_id);
                console.log(res);
                setDepartment(res);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [department_id]);

    return (
        <div>
            {department ? (
                <div>
                    <h1>{department.name}</h1>
                </div>
            ) : (
                <p>There is no products</p>
            )}
        </div>
    )
}

export default Department
