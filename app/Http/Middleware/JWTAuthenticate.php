<?php


namespace App\Http\Middleware;


use App\Services\TokenService;
use Illuminate\Http\Request;

class JWTAuthenticate
{
    /**
     * @var TokenService
     */
    private $authTokenService;

    /**
     * JWTAuthenticate constructor.
     * @param TokenService $authTokenService
     */
    public function __construct(
        TokenService $authTokenService
    )
    {
        $this->authTokenService = $authTokenService;
    }

    public function handle(Request $request, \Closure $next) {
        $bearerToken = $request->header('Authorization') ?? '';
        $token = explode(' ', $bearerToken) ?? [];
        if($token[0] !== 'Bearer' && !isset($token[1])) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized',
            ], 401);
        }
        $token = $token[1];

        list($payload, $user) = $this->authTokenService->validate($token);
        if(!$payload || !$user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized',
            ], 401);
        }

        return $next($request);
    }
}
