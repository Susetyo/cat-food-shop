import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';

export default function AnimalFoodList({auth, errors, animalFood,users}){    
    console.log(animalFood,'ANIMAL')

      const role = () => {
        const {user:userAuth} = auth;
        const findRole = users?.find((v)=> v.id === userAuth.id);

        return findRole.role
    }
    return(
        <Authenticated
            auth={auth}
            errors={errors}
            role={role()}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">List Food</h2>}
        >
            <Head title="List Food" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="w-full flex-wrap flex bg-white overflow-hidden shadow-sm sm:rounded-lg lg:px-8 sm:px-6 lg:py-8 sm:py-6">
                        {animalFood?.map((a)=>(
                            <div className="flex flex-col justify-center shadow-lg p-4 mr-4">
                                <img 
                                    src="https://m.media-amazon.com/images/I/91bdqTz3M2S._AC_SL1500_.jpg" 
                                    className="w-full h-[250px]" />
                                <div className="flex flex-col  justify-between">
                                    <div className="mt-2 flex flex-col">
                                        <span>{a.name_product}</span>
                                        <span>Rp {a.harga}</span>
                                    </div>
                                    <Button className="mt-2" onClick={()=> edit(v.id)}>
                                        Buy
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}