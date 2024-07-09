# crudApisProviders
crudApisProviders angular and laravel


BY Gerardo Puerto

Front End{

    Execute in local version:

    Angular version 14.2.13

    Npm version 16.17.1

    Execute NPM install for install another package.

    for run project in local mode please execute ng serve

}




Back End{
    
    You need Laravel 11.0 and need install composer
    
    Configuration proyect

    locate the sqllite file in database/database.sqlite and save the rute.

    locate the '.env example' file and change name for '.env'
    in .env file change the credentials for database

    DB_CONNECTION=sqlite
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=E:\proyectos\gapsiback\database/database.sqlite<--- put your rute for sqlite file
    DB_USERNAME=root
    DB_PASSWORD=

    execute in console

    php artisan serve.
}

Postman api file for import: backfullstackproyect.postman_collection

Api documentation{

    Get All Providers:{
        http://127.0.0.1:8000/api/providers

        request:
        response:
        {
            "providers": [
                {
                    "id": 7,
                    "name": "Test",
                    "email": "pruebas2@pruebas.com",
                    "phone": "1234567890",
                    "description": "English",
                    "status": "0",
                    "created_at": "2024-07-09T17:58:44.000000Z",
                    "updated_at": "2024-07-09T17:58:44.000000Z"
                },
                {
                    "id": 8,
                    "name": "Youtube",
                    "email": "pruebas2@google.com",
                    "phone": "1234567890",
                    "description": "English",
                    "status": "1",
                    "created_at": "2024-07-09T17:58:59.000000Z",
                    "updated_at": "2024-07-09T17:58:59.000000Z"
                },
                {
                    "id": 9,
                    "name": "nombre",
                    "email": "test@provedores.com",
                    "phone": "1234567890",
                    "description": "Spanish",
                    "status": "0",
                    "created_at": "2024-07-09T18:03:00.000000Z",
                    "updated_at": "2024-07-09T18:03:00.000000Z"
                },
                {
                    "id": 10,
                    "name": "nombre",
                    "email": "pruebas@pruebas.com",
                    "phone": "1234567890",
                    "description": "Spanish",
                    "status": "0",
                    "created_at": "2024-07-09T18:05:48.000000Z",
                    "updated_at": "2024-07-09T18:05:48.000000Z"
                },
                {
                    "id": 11,
                    "name": "test",
                    "email": "test@5.com",
                    "phone": "4444444444",
                    "description": "32234",
                    "status": "1",
                    "created_at": "2024-07-09T18:08:03.000000Z",
                    "updated_at": "2024-07-09T18:08:03.000000Z"
                },
                {
                    "id": 12,
                    "name": "proveedor 1",
                    "email": "test@test2.com",
                    "phone": "1234567890",
                    "description": "test",
                    "status": "1",
                    "created_at": "2024-07-09T18:16:00.000000Z",
                    "updated_at": "2024-07-09T18:16:00.000000Z"
                }
            ],
            "status": 200
        }
    }

        Get Provider:{
            http://127.0.0.1:8000/api/providers?id=1

            request:
            response:
            {
                "providers": [
                    {
                        "id": 1,
                        "name": "nombre",
                        "email": "test@test.com",
                        "phone": "1234567890",
                        "description": "Spanish",
                        "status": "1",
                        "created_at": "2024-07-09T06:57:59.000000Z",
                        "updated_at": "2024-07-09T06:57:59.000000Z"
                    }
                ],
                "status": 200
            }

        }
        Update Provider :{
            http://localhost:8000/api/providersU/1

            request:
            {
                "name":"nombre",
                "email":"test@test23.com",
                "phone":1234567890,
                "description":"Spanish",
                "status":1
            }
            response:
           {
                "message": "Provider Update",
                "providers": {
                    "id": 1,
                    "name": "nombre",
                    "email": "test@test23.com",
                    "phone": 1234567890,
                    "description": "Spanish",
                    "status": 1,
                    "created_at": "2024-07-09T06:57:59.000000Z",
                    "updated_at": "2024-07-09T17:14:33.000000Z"
                },
                "status": 200
            }

        }


        Destroy Provider :{
            http://localhost:8000/api/providersU/1

            request:
        
            response:
            {
                "message": "Delete Provider",
                "status": 200
            }

        }
}