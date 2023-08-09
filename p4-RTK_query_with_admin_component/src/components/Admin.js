// eslint-disable-next-line
import react from 'react';
import { useAddAccountsMutation, useGetAccountsQuery, useDeleteAccountsMutation, useUpdateAccountsMutation } from '../api/adminSlices';




function Admin() {
    const { data, error, isLoading } = useGetAccountsQuery();
    const [addAccounts, response] = useAddAccountsMutation();
    const [deleteAccounts, response1] = useDeleteAccountsMutation();
    const [updateAccount, response2] = useUpdateAccountsMutation();
    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>Admin Component</b>
                    {
                        data && data.map((value, index) => <p key={index}>{value.id}:{value.amount}
                            <button onClick={() => { deleteAccounts(value.id) }}>delete Account</button>
                            <button onClick={() => { updateAccount({ id: value.id, amount: 700 }) }}>Update Account</button>
                        </p>)
                    }
                </h4>

                <button onClick={() => { addAccounts(300, data.length + 1) }}>Add Account</button>

            </div>
        </div>
    );
}

export default Admin;
