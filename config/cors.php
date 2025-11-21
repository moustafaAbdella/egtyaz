<?php

return [

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        '*',
        'https://ezuru.serveo.net',
        'https://ezuruapi.serveo.net/graphql',
'http://dev.egtyaz.com',
'https://dev.egtyaz.com',
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,

];