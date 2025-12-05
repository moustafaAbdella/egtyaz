@extends('layouts.app')
@section('Content')
    <div class="features">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="item wow fadeInUp animated" data-wow-duration="0.3s"
                        style="visibility: visible; animation-duration: 0.3s; animation-name: fadeInUp;">
                        <h2 class="title">{{ $article->title }}</h2>
                        <div class="text-right">
                            {!!  html_entity_decode($article->description) !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
