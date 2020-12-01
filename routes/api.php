<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1', 'middleware' => 'jwt.auth'], function (){
   Route::apiResource('posts','PostsController');
});

Route::group(['prefix' => 'auth', 'middleware' => 'cookie.encrypt'], function (){
    Route::get('validate', 'AuthController@validateToken');
    Route::get('refresh', 'AuthController@refreshToken');
});
