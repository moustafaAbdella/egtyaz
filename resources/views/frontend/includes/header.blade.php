    @include('frontend.includes.head')
    <body>
        
        <!--Start of Tawk.to Script-->
    <script type="text/javascript">
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        // s1.async=true;
        s1.src='https://embed.tawk.to/63b1587e47425128790b0e2e/1glmc3c1r';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
    </script>
    <!--End of Tawk.to Script-->
       


	<!-- Global site tag (gtag) - Google Ads: 10804417351 --> 
	<amp-analytics type="gtag" data-credentials="include"> 
		<script type="application/json"> { "vars": { "gtag_id": "AW-10804417351", "config": { "AW-10804417351": { "groups": "default" } } }, "triggers": { } } </script> 
	</amp-analytics>
	<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NVMZSHS"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	<div class="menuMobile">

		<div class="BgClose"></div>
		<div class="menuContent">
			<div class="headMenu">
				<i class="fa fa-close closeX"></i>
			</div>
			<ul class="menuRes">
    			<li><a href="{{route('home')}}">الرئيسية</a></li>
    			 <li><a href="{{route('home.packages')}}">الباقات</a></li>

    				<li><a href="/article">المقالات</a></li>
                    <li><a href="/downloads">تحميلات</a></li>

    			<li><a href="{{route('bank')}}">بنك الأسئلة</a></li>
    			<li><a href="{{route('exam')}}">اختبار تجريبي</a></li>
    			<li><a href="{{route('askTeacher')}}">اسئل معلم </a></li>
    			{{-- <li><a href="{{route('askTeacher')}}">الدعم الفني</a></li>--}}
    			<li><a href="{{route('contact')}}">اتصل بنا</a></li>
			</ul>
		</div>
	</div>
    <header class="header">
    	<div class="topBar">
    		<div class="container">
    			@if(!Auth::guard('web')->check())
					<a href="{{route('register')}}">تسجيل جديد</a>
					<a href="{{route('login')}}">تسجيل الدخول</a>
				@else
					<a href="{{route('logout')}}">تسجيل الخروج</a>
					<a href="{{route('profile')}}">بياناتى</a>
				@endif
    		</div>
    	</div>
    	<div class="container">
    		<a href="{{route('home')}}" class="logo"><img src="{{ asset('/frontend/images/') }}/logo.png" /></a>
    		<ul class="menuHome">
    			<li><a href="{{route('home')}}">الرئيسية</a></li>
    			<li><a href="{{route('home.packages')}}">الباقات</a></li>
    			<li><a href="/article">المقالات</a></li>
                    <li><a href="/downloads">تحميلات</a></li>

    			<li><a href="{{route('bank')}}">بنك الأسئلة</a></li>
    			<li><a href="{{route('exam')}}">اختبار تجريبي</a></li>
    			<li><a href="{{route('askTeacher')}}">اسئل معلم </a></li>
    			<li><a href="{{route('contact')}}">اتصل بنا</a></li>
    		</ul>
			<i class="iconMenu"></i>
    	</div>
    </header>
    <div class="heightHeader"></div>
