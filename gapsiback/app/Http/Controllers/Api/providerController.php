<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\providers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class providerController extends Controller
{
    public function index()
    {


        $Providers = providers::all();
        /*
        $Providers2 = new Providers;
        $Providers2->name = "nombre ejemplo 1";
        $Providers2->descripcion = "esto es una prueba de test";
        $Providers2->phone = 1234567890;
        $Providers2->email = "ejemplo@ejemplo.com";
        $Providers2->status = 1;
        $Providers2->save();

        $Providers->name = "nombre ejemplo 1";
        $Providers->descripcion = "esto es una prueba de test";
        $Providers->phone = 1234567890;
        $Providers->email = "ejemplo@ejemplo.com";
        $Providers->status = 1;
        $Providers->save();
        */

        // if ($Providerss->isEmpty()) {
        //     $data = [
        //         'message' => 'No se encontraron estudiantes',
        //         'status' => 200
        //     ];
        //     return response()->json($data, 404);
        // }

        $data = [
            'providers' => $Providers,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:providers',
            'phone' => 'required|digits:10',
            'description' => 'required|max:255',
            'status' => 'required|digits:1',
        ]);

        if ($validator->fails()) {

            $data = [
                'message' => 'Validate data error',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        $Providers = providers::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'description' => $request->description,
            'status' => $request->status
        ]);


        if (!$Providers) {
            $data = [
                'message' => 'Error on create provider',
                'status' => 500
            ];
            return response()->json($data, 500);
        }

        $data = [
            'providers' => $Providers,
            'status' => 201
        ];

        return response()->json($data, 201);

    }

    public function show($id)
    {
        $Providers = providers::find($id);

        if (!$Providers) {
            $data = [
                'message' => 'Provider not found',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $data = [
            'providers' => $Providers,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $Providers = providers::find($id);

        if (!$Providers) {
            $data = [
                'message' => 'Provider not found',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $Providers->delete();

        $data = [
            'message' => 'Delete Provider',
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $Providers = providers::find($id);

        if (!$Providers) {
            $data = [
                'message' => 'Provider not found',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:Providers',
            'phone' => 'required|digits:10',
            'description' => 'required|max:255',
            'status' => 'required|digits:1'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error provider data',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        $Providers->name = $request->name;
        $Providers->email = $request->email;
        $Providers->phone = $request->phone;
        $Providers->description = $request->description;
        $Providers->status = $request->status;

        $Providers->save();

        $data = [
            'message' => 'Provider Update',
            'providers' => $Providers,
            'status' => 200
        ];

        return response()->json($data, 200);

    }

    public function updatePartial(Request $request, $id)
    {
        $Providers = providers::find($id);

        if (!$Providers) {
            $data = [
                'message' => 'Provider not found',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'max:255',
            'email' => 'email|unique:Providers',
            'phone' => 'digits:10',
            'description' => 'max:255',
            'status' => 'digits:1'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error validate data provider',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        if ($request->has('name')) {
            $Providers->name = $request->name;
        }

        if ($request->has('email')) {
            $Providers->email = $request->email;
        }

        if ($request->has('phone')) {
            $Providers->phone = $request->phone;
        }

        if ($request->has('description')) {
            $Providers->description = $request->description;
        }

        if ($request->has('status')) {
            $Providers->status = $request->status;
        }


        $Providers->save();

        $data = [
            'message' => 'Provider Update',
            'providers' => $Providers,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

}
