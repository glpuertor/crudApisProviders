<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\studentController;
use App\Http\Controllers\Api\providerController;


Route::get('/providers', [providerController::class, 'index']);

Route::get('/providers/{id}', [providerController::class, 'show']);

Route::post('/providers', [providerController::class, 'store']);

Route::put('/providersU/{id}', [providerController::class, 'update']);

Route::patch('/providers/{id}', [providerController::class, 'updatePartial']);

Route::delete('/providers/{id}', [providerController::class, 'destroy']);
