@extends('layouts.app')
@section('Content')
    <div class="features articles">
        <div class="container">
            <div class="row">
                @foreach ($articles as $article)
                    <div class="col-md-6">
                        <div class="item" 
                            style="visibility: visible;">
                            @if ($article->Category != null)
                                
                               <div style="display:none"> {{$article->Category->id == 184? $c="A" : $c="B"}}
                               </div>
                                


                                <span class="badge text-bg-info {{$c}}"
                                    style="position:absolute;top: 10%;left:5%">{{ $article->Category->name }}</span>
                            @endif
                            <a href="{{ route('article.show', $article->id) }}">
                                <h2 class="title">{{ $article->title }}</h2>
                                <div class="desc">
{{--                                    {{ Illuminate\Support\Str::limit(html_entity_decode($article->description), 20) }}--}}
                                </div>
                            </a>
                        </div>
                    </div>
                @endforeach

            </div>
        </div>
    </div>
@endsection
