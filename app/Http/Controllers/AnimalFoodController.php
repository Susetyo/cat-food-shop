<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AnimalFood;
use App\Models\DetailPembelian;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class AnimalFoodController extends Controller
{
    //

    public function index(){
        $animal_food = AnimalFood::all();
        $users = DB::table('users')
            ->leftJoin('role_users','role_users.user_id','=','users.id')
            ->leftJoin('roles','roles.id','=','role_users.role_id')
            ->select('users.*','roles.name as role')
            ->get();

        return Inertia::render('AnimalFood/AnimalFoodList', [
            'animalFood' => $animal_food,
            'users' => $users
        ]);
    }

    public function create()
    {
        return Inertia::render('AnimalFood/Create');
    }

    public function store(Request $request)
    {
     
        $animal = AnimalFood::insert([
            'name_product' => $request->name_product,
            'harga' => $request->harga,
            'qty' => $request -> qty,
        ]);

        $animal_food = AnimalFood::all();
        $users = DB::table('users')
        ->leftJoin('role_users','role_users.user_id','=','users.id')
        ->leftJoin('roles','roles.id','=','role_users.role_id')
        ->select('users.*','roles.name as role')
        ->get();
        
        return Inertia::render('AnimalFood/AnimalFoodList', [
            'animalFood' => $animal_food,
            'users' => $users
        ]);
    }
}
