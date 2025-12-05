
  @extends('layouts.dashboard') 
  @section('Content')

	@include('frontend.includes.topPartDashboard')
	@include('frontend.includes.breadCrumbDashboard')

    <div class="ratePage  minHeight600">

		@php 
			foreach ($taxonomies as $taxonomy) {
				if ($taxonomy['parent'] == 66) {
					$achievements[] = $taxonomy;
				} else {
					$rests[] = $taxonomy;
				}
			} 
		@endphp

		@if (isset($achievements))
		<div class="itemRate">
			<div class="rateHead clearfix">
				<div class="rightSection">
					<h2 class="title">{{ 'التحصيلي' }}</h2>
					<ul class="listRate clearfix">
						@php $counts = count($achievements)  ; @endphp
						@for( $i=1;$i<=$counts;$i++ )
							<li><img src="{{ asset('/frontend/images') }}/medal-of-honor.png" /></li>
						@endfor
					</ul>
				</div>
				<div class="leftSection">
					<div data-size="120" data-value="{{ $counts / 5 }}" data-fill="{&quot;color&quot;: &quot;#00C29B&quot;}" class="firstx circleNormal circle">
					<strong></strong>
					</div>
					<span class="textRate">نسبة الانجاز</span>
				</div>
			</div>
			<div class="rateBody">
			@foreach( $achievements as $achievement2 )
				<span class="progressTitle">{{ $achievement2['name'] }}</span>
				<div class="progress clearfix"><div progress-width="{{ $percents[$achievement2['id']]['percent'] }}" class="color1 line"><span class="numb">{{ $percents[$achievement2['id']]['percent'] }} %</span></div></div>
			@endforeach
			</div>
		</div>
		@endif

		@if (isset($rests))
			@foreach( $rests as $rest )
			@php if( $rest['type'] != 'subject' ){ continue; } @endphp
			<div class="itemRate">
					<div class="rateHead clearfix">
						<div class="rightSection">
							<h2 class="title">{{ $rest['name'] }}</h2>
							<ul class="listRate clearfix">
								@php $counts = (5 * $percents[$rest['id']]['percent'] ?? 0) / 100  ; @endphp
								@for( $i=1;$i<=$counts;$i++ )
									<li><img src="{{ asset('/frontend/images') }}/medal-of-honor.png" /></li>
								@endfor
							</ul>
						</div>
						<div class="leftSection">
							<div data-size="120" data-value="{{ $percents[$rest['id']]['percent'] / 100 }}" data-fill="{&quot;color&quot;: &quot;#00C29B&quot;}" class="firstx circleNormal circle">
							<strong></strong>
							</div>
							<span class="textRate">نسبة الانجاز</span>
						</div>
					</div>
					<div class="rateBody">
					@foreach( $rests as $rest2 )
						@php if( $rest2['type'] != 'skill' || $rest2['parent'] != $rest['id'] ){ continue; } @endphp
						<span class="progressTitle">{{ $rest2['name'] }}</span>
						<div class="progress clearfix"><div progress-width="{{ $percents[$rest2['id']]['percent'] }}" class="color1 line"><span class="numb">{{ $percents[$rest2['id']]['percent'] }} %</span></div></div>
					@endforeach
					</div>
				</div>
			@endforeach
		@endif

		<div class="clearfix hide">
			<a href="#" class="btnForm">إعادة جميع التقييمات</a>
		</div>
		
	</div>
	    
	    
  @endsection
@section('custom_javascript')
	<script> 
        $(document).ready(function(){

            $('.firstx').each(function(){

                var p =  parseFloat( $(this).attr('data-value')) ;

                $(this).circleProgress({
		            value: p
                }).on('circle-animation-progress', function (event, progress) {
                    $(this).find('strong').html('<i>%</i>' + Math.round( (p * 100) * progress));

                });

            });

        });
    </script>
@stop

