import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';

export default function UserEdit(props) {
    const {user, roles} = props;
    console.log(user)
    const { data, setData, put, processing, errors, reset } = useForm({
        name: user[0].name,
        email:user[0].email,
        role: user[0].role,
        id:user[0].id
    });

    const onHandleChange = (event) => {
        console.log(event.target.type);
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data)
        put(route('update-user'));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Update Role</h2>}
        >
            <Head title="Update Role" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit} className="lg:px-8 lg:py-8 sm:px-6 sm:py-6">
                <div>
                    <Label forInput="name" value="Name" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="Email" />
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="roles" value="Roles" />
                    <div className="relative inline-block w-full text-gray-700">
                        <select 
                            onChange={onHandleChange} 
                            name="role" 
                            value={data.role} 
                            className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" 
                            placeholder="Regular input">
                            {roles?.map((v)=>(
                                <option value={v.id}> {v.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        Edit
                    </Button>
                </div>
            </form>
        </Authenticated>
    );
}
