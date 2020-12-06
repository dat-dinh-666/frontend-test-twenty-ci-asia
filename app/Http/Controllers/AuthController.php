<?php


namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Services\TokenService;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * @var TokenService
     */
    private $tokenService;

    /**
     * AuthController constructor.
     * @param TokenService $tokenService
     */
    public function __construct(
        TokenService $tokenService
    )
    {
        $this->tokenService = $tokenService;
    }

    public function validateToken(Request $request){
        $token = $request->input('token');

        list($payload, $user) = $this->tokenService->validate($token);

        if(!$payload || !$user) {
            return $this->error('Invalid Token', [], 401);
        }

        return $this->success();
    }

    public function refreshToken(Request $request){
        $refreshToken = $request->cookie('refresh_token');

        if(!$refreshToken) {
            return $this->error(__('ss_invalid_token'), [],401);
        }
        list($payload, $seller) = $this->tokenService->validate($refreshToken);

        if(!$payload || !$seller) {
            cookie()->forget(TokenService::REFRESH_TOKEN_COOKIE_KEY);
            return $this->error(__('ss_invalid_token'), [], 400);
        }

        $newToken = $this->tokenService->generate($seller);

        return $this->success(['token' => $newToken]);

    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if($validator->fails()) {
            return $this->error('Invalid input');
        }

        $email = $request->input('email');
        $password = $request->input('password');

        $isValidate = Auth::validate([
            'email' => $email,
            'password' => $password
        ]);

        if(!$isValidate) {
            return $this->error('Invalid user', [], 404);
        }

        /** @var User $user */
        $user = User::query()->where('email', $email)->first();

        $token = $this->tokenService->generate($user);
        $refreshToken = $this->tokenService->generateRefreshToken($user);

        Cookie::queue(TokenService::REFRESH_TOKEN_COOKIE_KEY, $refreshToken, 1440);

        return $this->success(['token' => $token]);
    }
}
