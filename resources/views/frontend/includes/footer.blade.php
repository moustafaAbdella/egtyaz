https://wa.link/qejili
<footer class="new-footer">
    <div class="container-fluid">
        <div>
            <a href="{{ route('home') }}" class="logo">
                <img src="{{ asset('/frontend/images/') }}/logo.png" />
            </a>
        </div>
        <div>
            <h3> أهم الروابط</h3>
            <ul class="">
                <li><a href="{{ route('home') }}">الرئيسية</a></li>
                <li>
                    <a href="{{ route('article.index') }}">المقالات</a>
                </li>
                <li><a href="/downloads">تحميلات</a></li>
                <li>
                    <a href="{{ route('bank') }}">بنك الأسئلة</a>
                </li>
                @if (!Auth::guard('web')->check())
                    
                @else
                    <li><a href="{{ route('exam') }}">اختبار تجريبي</a></li>
                    <li><a href="{{ route('askTeacher') }}">اسئل معلم </a></li>
                @endif
            </ul>
        </div>
        <div>
            <h3>الباقات</h3>
            <ul class="">
                @foreach ($packages as $package)
                    <li>
                        @if (!Auth::guard('web')->check())
                            <a href="/register?p={{ $package->id }}" class="btnPlan"> {{ $package->name }}</a>
                        @else
                            <a href="{{ route('buy_package_details', $package->id) }}" class="btnPlan">
                                {{ $package->name }}</a>
                        @endif
                    </li>
                @endforeach

            </ul>
        </div>
        <div>
            <h3>التسجيل</h3>
            <ul class="">
                @if (!Auth::guard('web')->check())
                    <li>
                        <a href="{{ route('register') }}">تسجيل جديد</a>
                    </li>
                    <li>
                        <a href="{{ route('login') }}">تسجيل الدخول</a>
                    </li>
                @else
                    <li>
                        <a href="{{ route('logout') }}">تسجيل الخروج</a>
                    </li>
                    <li>
                        <a href="{{ route('profile') }}">بياناتى</a>
                    </li>
                @endif
            </ul>
            <ul class="">
                <li><a href="{{ route('page', 'about') }}">من نحن</a></li>
                <li><a href="{{ route('page', 'terms') }}">شروط الاستخدام</a></li>
                <li><a href="{{ route('page', 'privacy') }}">الخصوصية</a></li>
                <li><a href="{{ route('page', 'faq') }}">أسئلة وأجوبة</a></li>
                <li><a href="{{ route('contact') }}">اتصل بنا</a></li>
            </ul>
        </div>
    </div>
    <div class="newfooterbottombar">
        <ul class="newsocialFooter clearfix">
            <li><a href="{{ $options['social']['facebook'] ?? '' }}" class="fa fa-facebook"></a></li>
            <li><a href="{{ $options['social']['twitter'] ?? '' }}" class="fa fa-twitter"></a></li>
            <li><a href="{{ $options['social']['instagram'] ?? '' }}" class="fa fa-instagram"></a></li>
        </ul>
        <p class="copyrights">
            جميع الحقوق محفوظة لمنصة اجتياز التعليمية
        </p>
    </div>
</footer>

	    <footer class="footer">
	    	<div class="container-fluid">
	    		<div class="">
		    		<!--<p class="copyFooter">تصميم وبرمجة : <a href="http://egyptyhost.com">Egyptyhost.com</a></p>-->
		    		<ul class="listFooter clearfix">
		    			<li><a href="{{ route('page' , 'about') }}">من نحن</a></li>
		    			<li><a href="{{ route('page' , 'terms') }}">شروط الاستخدام</a></li>
		    			<li><a href="{{ route('page' , 'privacy') }}">الخصوصية</a></li>
		    			<li><a href="{{ route('page' , 'faq') }}">أسئلة وأجوبة</a></li>
		    			<li><a href="{{ route('contact') }}">اتصل بنا</a></li>
		    		</ul>
	    			
				</div>
				<div>
				    <ul class="listImgs clearfix">
	    			<li><img src="{{ asset('/frontend/images') }}/payment1.png" /></li>
	    			<li><img src="{{ asset('/frontend/images') }}/payment2.png" /></li>
	    			<li><img src="{{ asset('/frontend/images') }}/payment3.png" /></li>
	    			<li><img src="{{ asset('/frontend/images') }}/payment4.png" /></li>
	    			<li><img src="{{ asset('/frontend/images') }}/payment5.png" /></li>
	    			<li><img src="{{ asset('/frontend/images') }}/payment6.png" /></li>
	    		</ul>
				</div>
				<div class="">

					<ul class="socialFooter clearfix">
						<li><a href="{{ $options['social']['facebook'] ?? '' }}" class="fa fa-facebook"></a></li>
						<li><a href="{{ $options['social']['twitter'] ?? '' }}" class="fa fa-twitter"></a></li>
						<li><a href="{{ $options['social']['instagram'] ?? '' }}" class="fa fa-instagram"></a></li>
					</ul>
					<p class="copyrights">
					جميع الحقوق محفوظة لمنصة اجتياز التعليمية
					</p>
				</div>

	    	</div>
	    </footer>

    </div>

    <div id="video" class="modal fade order-box" role="dialog">
          <div class="modal-dialog">

            <div class="modal-content">

                <div class="modal-body">

                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WKKyvZHWjrc" frameborder="0" allowfullscreen=""></iframe>

                </div>
            </div>
        </div>
    </div>

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
		<a href="https://wa.link/p5jkab" class="float" target="_blank">
			<i class="fa fa-whatsapp my-float"></i>
		</a>

<!--Start of Tawk.to Script-->
            <script type="text/javascript">
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/63b1587e47425128790b0e2e/1glmc3c1r';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            </script>
            <!--End of Tawk.to Script-->
    <script src="{{ asset('/frontend/js/jquery-1.11.2.min.js') }}"></script>
    <script src=" {{ asset('/frontend/js/jquery.bxslider.min.js') }}"></script>
    <script src=" {{ asset('/frontend/js/jquery-ui.js') }}"></script>
	<script src=" {{ asset('/frontend/js/Chart.min.js') }}"></script>
    <script src=" {{ asset('/frontend/js/circle-progress.min.js') }}"></script>
    <script src=" {{ asset('/frontend/js/intlTelInput.js') }}"></script>
    <script src=" {{ asset('/frontend/js/bootstrap.min.js') }}"></script>
    <script src=" {{ asset('/frontend/js/owl.carousel.js') }}"></script>
    <script src=" {{ asset('/frontend/js/wow.min.js') }}"></script>
    <script src=" {{ asset('/frontend/js/jquery.inview.min.js') }}"></script>
    <script src=" {{ asset('/frontend/js/jquery.countTo.js') }}"></script>
    <script src=" {{ asset('/frontend/js/jquery.nicescroll.js') }}"></script>
    <script src=" {{ asset('/frontend/js/jquery.toast.min.js') }}"></script>
    <script src=" {{ asset('/frontend/js/custom.js') }}"></script>

    @yield('custom_javascript')
	<script>
		$(function(){
			@if(session()->has('toast-success'))
				$.toast({
					heading: 'رسالة تنبية',
					text: '{!! session("toast-success") !!}',
					showHideTransition: 'slide',
					icon: 'success',
					position : 'top-right',
					textAlign: 'right',
					hideAfter: {!! session("toast-time") ? session("toast-time") : 3000 !!}
				})
			@endif

			@if(session()->has('errors'))
				@foreach( session('errors') as $error )
					$.toast({
						heading: 'رسالة تنبية',
						text: '{!! $error !!}',
						showHideTransition: 'slide',
						icon: 'error',
						position : 'top-right',
						textAlign: 'right',
						hideAfter: {!! session("toast-time") ? session("toast-time") : 3000 !!}
					});
				@endforeach
			@endif
		});
	</script>

	<style>
		.pagiDiv .pagination li span {
			display: inline-block;
			width: 40px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			color: #000;
			border: none;
			padding: 0;
			font-family: "Tajawal-Bold";
			background: none;
			border-radius: 5px;
		}
		.float{
			position:fixed;
			width:60px;
			height:60px;
			bottom:40px;
			right:40px;
			background-color:#25d366;
			color:#FFF;
			border-radius:50px;
			text-align:center;
			font-size:30px;
			box-shadow: 2px 2px 3px #999;
			z-index:100;
		}

		.my-float{
			margin-top:16px;
		}
	</style>

</body>

</html>
