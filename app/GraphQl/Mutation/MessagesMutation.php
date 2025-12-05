<?php

namespace App\GraphQl\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Mutation;

class MessagesMutation extends Mutation
{
    protected $attributes = [
        'name' => 'MessagesMutation'
    ];

    public function type()
    {
        return GraphQL::type('MessagesMutationType');
    }
    

    public function args()
    {
        return [

        ];
    }

    public function resolve($root, $args)
    {
        return true ;
    }
}