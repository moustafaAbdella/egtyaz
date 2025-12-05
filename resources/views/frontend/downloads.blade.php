@extends('layouts.app')
@section('Content')
    <div class="features">
        <div class="container">
            <div class="row">
                @foreach ($downloads as $download)
                    <div class="col-md-4">
                        <div class="item wow fadeInUp animated" data-wow-duration="0.3s"
                            style="visibility: visible; animation-duration: 0.3s; animation-name: fadeInUp;">
                            <h2 class="title">{{ $download->title }}</h2>
                            @foreach ($download->description as $key => $item)
                                <div class="btn {{ $key !=  0 ? 'btn-success' : 'btn-primary'  }} btn-primary mx-2">
                                    <a class="text-white" style="color:white" href="{{ $item }}" target="_blank">
                                        @if ($key == 0)
                                            تحميل
                                        @else
                                            اختبار
                                        @endif
                                    </a>
                                </div>
                            @endforeach
                        </div>
                    </div>
                @endforeach

            </div>
        </div>
    </div>
@endsection
