import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';

export default function UserList({auth, errors, user}){
    const edit = (id)=>{
        window.location.href= 'edit-users?id='+id;
    }

    const role = () => {
        const {user:userAuth} = auth;
        const findRole = user?.find((v)=> v.id === userAuth.id);

        return findRole.role
    }
    
    return(
        <Authenticated
            auth={auth}
            errors={errors}
            role={role()}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">List User</h2>}
        >
            <Head title="User List" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="w-full bg-white overflow-hidden shadow-sm sm:rounded-lg lg:px-8 sm:px-6 lg:py-8 sm:py-6">
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="border-2">
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Update at</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user?.map((v,i)=>(
                                    <tr className="border-2" key={`user-key-${v.id}`}>
                                        <td className="text-center">{v.name}</td>
                                        <td className="text-center">{v.email}</td>
                                        <td className="text-center">{v.role ? v.role : '-'}</td>
                                        <td className="text-center">{v.update_at? v.update_at : '-'}</td>
                                        <td className="text-center">                    
                                            <Button className="ml-4" onClick={()=> edit(v.id)}>
                                                Edit
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}