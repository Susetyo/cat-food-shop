import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';

export default function Create(props) {
    const {user, roles} = props;
    console.log(props)
    const { data, setData, post, processing, errors, reset } = useForm({
        name_product: '',
        harga:'',
        qty: 0,
    });

    const onHandleChange = (event) => {
        console.log(event.target.type);
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route('animal-foods'));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Product</h2>}
        >
            <Head title="Update Role" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit} className="lg:px-8 lg:py-8 sm:px-6 sm:py-6">
                <div>
                    <Label forInput="name_product" value="Name Product" />

                    <Input
                        type="text"
                        name="name_product"
                        value={data.name_product}
                        className="mt-1 block w-full"
                        autoComplete="name_product"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="harga" value="Harga" />
                    <Input
                        type="text"
                        name="harga"
                        value={data.harga}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="roles" value="Qty" />
                    <Input
                        type="number"
                        name="qty"
                        value={data.qty}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        Submbit
                    </Button>
                </div>
            </form>
        </Authenticated>
    );
}
