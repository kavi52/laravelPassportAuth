<<<<<<< HEAD
=======
# laravelPassportAuth
Laravel login, logout and register using passport authentication module

**Installation **

composer require laravel/passport

composer require laravel/passport

**For client id and secret**
php artisan passport:install


1. Go to app->models->user.php 

change "use Laravel\Sanctum\HasApiTokens;" with "use Laravel\Passport\HasApiTokens;"

2. Go to provider -> AuthServiceProvider
Add passport usage over here..

"use Laravel\Passport\Passport;"

i. go to policies, uncomment below
'App\Models\Model' => 'App\Policies\ModelPolicy',

3. Go to config->auth.php
Add below **api** for guards
    'api' => [
        'driver' => 'passport',
        'provider' => 'users',
    ],
    
4. Configure **Route**
Go to routes->api.php
add middleware

php artisan make:controller API/AuthController
use App\Http\Controllers\API\AuthController;


Now add route for login, register and logout
5. Again go to api.php
Add below

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'register']);

Route::middleware('auth:api')->group(function(){
    Route::get('get-user', [AuthController::class, 'userInfo']);
});

6. Again go to auth controller

    public function register(Request $request){
        $user = User::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> \Hash::make($request->password),
        ]);

        $token = $user->createToken('Token')->accessToken;
        
        return response()->json([
            'token'=> $token,
            'user'=> $user
        ],200);

    }
>>>>>>> 2d4106c7e5c6d2a748ce7b5748a4530701441705
