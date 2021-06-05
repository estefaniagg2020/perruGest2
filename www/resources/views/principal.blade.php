<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>{{ config('app.name') }}</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>

    <!-- CoreUI CSS -->
    <link rel="stylesheet" href="{{'css/app.css' }}" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />


</head>

<body>
    <div id="app">
       <div class="row ">
            <container-component class="col-12" />
       </div>
        <!-- <div class="c-wrapper">
            <header class="c-header c-header-light c-header-fixed">
                <!-- @include('layouts.header') -->
        <!-- </header>

        <div class="c-body">
            <main class="c-main">
                <!-- @yield('content') -->
        <!--</main>
        </div>-->

        <footer class="c-footer">
            <div><a href="https://coreui.io">CoreUI</a> © 2020 creativeLabs.</div>
            <div class="mfs-auto">Powered by&nbsp;<a href="https://coreui.io/">CoreUI</a></div>
        </footer>

    </div>


    <script src="{{ 'js/app.js' }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.4.0/perfect-scrollbar.js"></script>



</body>

</html>