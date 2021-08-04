import React from 'react';
import Back from '../back';

const Add_job = () => {
    return (
        <div>
            <table>
                <tr>
                    <td>Company Name</td>
                    <td><input name='Company_name' type="text" /></td>
                </tr>
                <tr>
                    <td>Job Title</td>
                    <td><input name='J_title' type="text" /></td>
                </tr>
                <tr>
                    <td>Job Location</td>
                    <td><input name='J_location' type="text" /></td>
                </tr>
                <tr>
                    <td>Salary</td>
                    <td><input name='salary' type="number" /></td>
                </tr>
                
                <tr>

                    <td></td>
                    <td>
                        <button name='submit' type="submit">Add</button> |
                        <Back />
                    </td>

                </tr>

            </table>
        </div>
    );
};

export default Add_job;