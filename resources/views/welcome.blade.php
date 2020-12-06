<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Front End Test</title>

        <link rel="stylesheet" href="{{mix('css/app.css')}}"/>
    </head>
    <body>
        <div id="root"></div>
        <script>
            window.baseUrl = "{{url('/')}}";
        </script>
        <script type="text/javascript" src="{{mix('js/app.js')}}"></script>
    </body>
</html>
