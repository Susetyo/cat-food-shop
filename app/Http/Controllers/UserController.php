<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index(){
        $users = DB::table('users')
            ->leftJoin('role_users','role_users.user_id','=','users.id')
            ->leftJoin('roles','roles.id','=','role_users.role_id')
            ->select('users.*','roles.name as role')
            ->get();
        return Inertia::render('User/UserList', [
            'user' => $users,
        ]);
    }

    public function edit(Request $request){
        $users = DB::table('users')
        ->leftJoin('role_users','role_users.user_id','=','users.id')
        ->leftJoin('roles','roles.id','=','role_users.role_id')
        ->where('users.id','=',$request->get('id'))
        ->select('users.*','roles.name as role')
        ->get();

        $roles = DB::table('roles')->get();

        return Inertia::render('User/UserEdit', [
            'user' => $users,
            'roles' => $roles,
        ]);
    }

    public function update(Request $request){
        $roleUsers = DB::table('role_users')
        ->where('role_users.user_id','=',$request->id)
        ->update(['role_id'=> $request->role]);

        $users = DB::table('users')
        ->leftJoin('role_users','role_users.user_id','=','users.id')
        ->leftJoin('roles','roles.id','=','role_users.role_id')
        ->select('users.*','roles.name as role')
        ->get();

   
        return Inertia::render('User/UserList', [
            'user' => $users,
        ]);
    }
}
