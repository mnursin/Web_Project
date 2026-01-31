<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"
      @class(['dark' => ($appearance ?? 'system') == 'dark'])>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Dark mode detection --}}
    <script>
        (function () {
            const appearance = '{{ $appearance ?? "system" }}';
            if (appearance === 'system' &&
                window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
            }
        })();
    </script>

    <style>
        html { background-color: oklch(1 0 0); }
        html.dark { background-color: oklch(0.145 0 0); }
    </style>

    {{-- ✅ INERTIA TITLE --}}
    <title inertia>{{ config('app.name', 'Solar Panel Monitoring') }}</title>

    <link rel="icon" href="/icon/webhook.svg" sizes="any">
    <link rel="icon" href="/icon/webhook.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/icon/webhook.svg">

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])

    @inertiaHead
</head>
<body class="font-sans antialiased">
    @inertia
</body>
</html>
