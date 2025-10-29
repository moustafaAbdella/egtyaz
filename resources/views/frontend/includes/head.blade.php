<!DOCTYPE html>
<head>

   <meta charset="UTF-8" />
    <!-- IE Compatibility Meta -->
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- First Mobile Meta  -->
   <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{$meta['title']}}</title>
    <meta name="description" content="{{$meta['description']}}">
    <meta name="keywords" content="{{$meta['keywords']}}">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="user_email" content="">

    
            
    <link href="{{ asset('/frontend/css/flaticon.css') }}" rel='stylesheet' type='text/css'>
    <link href="{{ asset('/frontend/css/font.css') }}" rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="{{ asset('/frontend/css/jquery-ui.css') }}" />
	<link rel="stylesheet" href="{{ asset('/frontend/css/jquery.bxslider.css') }}" />
	<link rel="stylesheet" href="{{ asset('/frontend/css/animate.css') }}" />
	<link rel="stylesheet" href="{{ asset('/frontend/css/intlTelInput.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('/frontend/css/bootstrap.css') }}" />
    <link rel="stylesheet" href="{{ asset('/frontend/css/bootstrap-rtl.css') }}" />
    <link rel="stylesheet" href="{{ asset('/frontend/css/font-awesome.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('/frontend/css/owl.carousel.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('/frontend/css/owl.theme.default.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('/frontend/css/style.css') }}" />
    <link rel="stylesheet" href="{{ asset('/frontend/css/responisve.css') }}" />
    <link rel="stylesheet" href="{{ asset('/frontend/css/jquery.toast.min.css') }}" />

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DLT1EFX3S6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DLT1EFX3S6');
</script>


    
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NVMZSHS');</script>
<!-- End Google Tag Manager -->

    <meta name="facebook-domain-verification" 
content="28svufyvm8oa8poc693e8g8o0ut49j" />

    @yield('custom_css')

   <style>
   .jq-toast-wrap{
       width: 500px;
   }

   .close-jq-toast-single{
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 25px;
    cursor: pointer;
   }

   .jq-toast-single h2{
       font-size: 18px;
       margin-right: 20px;
       font-family: "Tajawal-Bold";
   }
   .jq-toast-single{
    font-size: 16px;
    line-height: 30px;
    font-family: "Tajawal-Bold";
   }
     .is-invalid{
         border: 1px red solid;
     }
     .invalid-feedback{
        margin-top: -20px;
        display: block;
        line-height: 20px;
        font-size: 15px;
        padding: 10px 0;
        color: red;
}

.loader{
    border: 5px solid #f3f3f3;
    border-top-color: rgb(243, 243, 243);
    border-top-style: solid;
    border-top-width: 5px;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
    border-top: 5px solid #54678D;
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
     }
   </style>
   <!--[if lt IE 9]>
       <script src="js/html5shiv.min.js"></script>
       <script src="js/respond.min.js"></script>
   <![endif]-->

    <!-- Snap Pixel Code -->
    <script type='text/javascript'>
    (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
    {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
    a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
    r.src=n;var u=t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r,u);})(window,document,
    'https://sc-static.net/scevent.min.js');
    
    snaptr('init', 'a5db04ad-43bd-4f35-8809-1d7b39e0a986', {
    'user_email': '__INSERT_USER_EMAIL__'
    });
    
    snaptr('track', 'PAGE_VIEW');
    
    </script>
    <!-- End Snap Pixel Code -->

    

    <!-- Event snippet for Website traffic conversion page --> 
    <script> 
        gtag('event', 'conversion', {
            'send_to': 'AW-10804417351/AxeECPKG4rQDEMem-Z8o'
        }); 
    </script>

    <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>

    <!-- Meta Pixel Code --><script> !function(f,b,e,v,n,t,s) 
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod? 
        n.callMethod.apply(n,arguments):n.queue.push(arguments)}; 
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; 
        n.queue=[];t=b.createElement(e);t.async=!0; 
        t.src=v;s=b.getElementsByTagName(e)[0]; 
        s.parentNode.insertBefore(t,s)}(window, document,'script', 
        'https://connect.facebook.net/en_US/fbevents.js'); 
        fbq('init', '739186607260299'); fbq('track', 
        'PageView');</script><noscript><img height="1" width="1" 
        style="display:none" 
        src="https://www.facebook.com/tr?id=739186607260299&e
        v=PageView&noscript=1"/></noscript>
        <!-- End Meta Pixel Code -->




</head>
