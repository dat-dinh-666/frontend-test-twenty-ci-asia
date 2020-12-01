<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function success($data = [])
    {
        $response['success'] = true;
        if ($data instanceof Paginator) {
            $data = $data->toArray();
            $response = array_merge($response, $data);
        } else {
            $response['data'] = $data;
        }
        return response()->json($response);
    }

    public function error($message, $data = [], $status = 400)
    {
        $response['success'] = false;
        $response['message'] = $message;
        if (is_array($data)) {
            $response = array_merge($response, $data);
        } else {
            $response['data'] = $data;
        }
        return response()->json($response, $status);
    }
}
