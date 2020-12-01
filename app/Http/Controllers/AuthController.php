<?php


namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Services\TokenService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

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
            return $this->error(__('ss_invalid_token'), [], 401);
        }

        $newToken = $this->tokenService->generate($seller);

        return $this->success(['token' => $newToken]);

    }
}
