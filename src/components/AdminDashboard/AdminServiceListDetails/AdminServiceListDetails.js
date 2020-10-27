import React from 'react';
import './AdminServiceListDetails.css';

const AdminServiceListDetails = ({ addedService }) => {
    return (
   
            <tr style={{ fontWeight: '400', }}>
                <td style={{ width: '20%' }}>{addedService.name}</td>
                <td style={{ width: '20%' }}>{addedService.email}</td>
                <td style={{ width: '20%' }}>{addedService.title}</td>
                <td style={{ width: '30%' }}>{addedService.details}</td>
                <td ></td>
            </tr>


    );
};

export default AdminServiceListDetails;