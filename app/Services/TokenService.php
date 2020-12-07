<?php

namespace App\Services;

use App\User;
use Firebase\JWT\JWT;

class TokenService
{
    const TOKEN_EXPIRING_TIME = 64800;
    const REFRESH_TOKEN_EXPIRING_TIME = 129600;
    const REFRESH_TOKEN_COOKIE_KEY = 'refresh_token';

    /**
     * @param $user User
     * @return bool|string
     */
    public function generate($user)
    {
        if (!$user) {
            return false;
        }
        $payload = [
            "email" => $user->email,
            "id" => $user->id,
            "iat" => time(),
            "exp" => time() + self::TOKEN_EXPIRING_TIME
        ];
        return JWT::encode($payload, env('JWT_SECRET'));
    }

    public function generateRefreshToken($user){
        if (!$user) {
            return false;
        }
        $payload = [
            "email" => $user->email,
            "id" => $user->id,
            "iat" => time(),
            "exp" => time() + self::REFRESH_TOKEN_EXPIRING_TIME
        ];
        return JWT::encode($payload, env('JWT_SECRET'));
    }

    /**
     * @param $token
     * @return array
     */
    public function validate($token)
    {
        try {
            $payload = JWT::decode($token, env('JWT_SECRET'), ['HS256']);
            if ($payload && $payload->exp > time()) {
                $user = User::query()
                    ->where('id', $payload->id ?? '')
                    ->orWhere('id', $payload->email ?? '')
                    ->first();
                return [$payload, $user];
            }
        } catch (\Exception $e) {}
        return [false, false];
    }
}
