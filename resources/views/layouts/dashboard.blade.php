@include('frontend.includes.head')
<body class="bodyCpanel overflowH">
    <div class="menuCpanel active"> 
    	<i class="iconMenuCpanel"></i>
		@if( $CURRENT_USER_ROLE == 'teacher' )
			<ul class="linksCpanel">
				<li>
					<a href="{{ route('askTeacher') }}" class="@if( Route::is('askTeacher*') ) active @endif"><i class="iconColor9 flaticon-question-1"></i>اسأل معلم</a>
					<ul>
						@if( $CURRENT_USER_ROLE != 'teacher' )
						<li>
							<a href="{{ route('askTeacher') }}" class="@if( Route::is('askTeacher') ) active @endif"> اسأل معلم  </a>
						</li>
						<li>
							<a href="{{ route('askTeacherMine') }}" class="@if( Route::is('askTeacherMine') ) active @endif"> قائمة اسئلتى </a>
						</li>
						@else
						<li>
							<a href="{{ route('askTeacherList') }}" class="@if( Route::is('askTeacherList') ) active @endif" > قائمة الاسئلة </a>
						</li>
						@endif
					</ul>
				</li>
			</ul>
		@else
		<ul class="linksCpanel">
			<li><a href="{{ route('packages') }}"><i class="iconColor10 flaticon-group"></i>خطط الاشتراكات</a></li>
			
			@if ($USER_PACKAGE)
                
                @if (json_decode($USER_PACKAGE->package->roles)->bank)
                <li><a href="{{ route('bank') }}" class="@if( Route::is('bank*') ) active @endif"><i class="iconColor1 flaticon-information"></i>بنك الأسئلة</a></li>
				@elseif (!json_decode($USER_PACKAGE->package->roles)->bank)
				<li><a class="@if( Route::is('bank*') ) active @endif"><i class="iconColor1 flaticon-information"></i>بنك الأسئلة</a></li>
                @endif
                
                @if (json_decode($USER_PACKAGE->package->roles)->free_exam)
                <li><a href="{{ route('exam') }}"class="@if( Route::is('exam*') ) active @endif"><i class="iconColor2 flaticon-testing"></i>اختبار تجريبى </a>
                	<ul>
                	<li><a href="{{ route('exam' ) }}">اختبار تجريبى جديد </a></li>
                	<li><a href="{{ route('exams') }}">انجازاتى </a></li>
                	</ul>
                </li> 
				@elseif (!json_decode($USER_PACKAGE->package->roles)->free_exam)
				<li><a class="@if( Route::is('exam*') ) active @endif"><i class="iconColor2 flaticon-testing"></i>اختبار تجريبى </a>
                	<ul>
                	<li><a >اختبار تجريبى جديد </a></li>
                	<li><a >انجازاتى </a></li>
                	</ul>
                </li> 
                @endif
                
                @if (json_decode($USER_PACKAGE->package->roles)->mock_exam)
                <li><a href="javascript:;"class="@if( Route::is('subjects*') ) active @endif"><i class="iconColor3 flaticon-idea-3"></i>اختبار القدرات </a>
                	<ul> 
						@foreach ($e5tbarKodrat as $itemMock )
 							<li><a href="{{ route('exSubjects', ['id' => $itemMock->id]) }}">{{ $itemMock->name }}</a></li>
						@endforeach
                		<!-- <li><a href="{{ route('exSubjects', ['id' => '23']) }}">كمي </a></li> -->
                		<!-- <li><a href="{{ route('exSubjects', ['id' => '24']) }}">لفظي </a></li> -->
                		<!-- <li><a href="{{ route('exSubjects', ['id' => '2']) }}">لفظي وكمي </a></li> -->
                		<!-- <li><a href="{{ route('exSubjects', ['id' => '112']) }}">أحدث النماذج </a></li> -->
                	</ul>
                </li>
				@elseif (!json_decode($USER_PACKAGE->package->roles)->mock_exam)
				<li><a href="javascript:;"class="@if( Route::is('subjects*') ) active @endif"><i class="iconColor3 flaticon-idea-3"></i>اختبار القدرات </a>
					<ul> 
						@foreach ($e5tbarKodrat as $itemMock )
 							<li><a>{{ $itemMock->name }}</a></li>
						@endforeach
						<!-- <li><a >كمي </a></li> -->
						<!-- <li><a >لفظي </a></li> -->
						<!-- <li><a >لفظي وكمي </a></li> -->
						<!-- <li><a >أحدث النماذج </a></li> -->
					</ul>
                @endif
                
                <?php $roles = json_decode($USER_PACKAGE->package->roles); ?>
				@if (isset($roles->achievements))
                <li><a href="javascript:;"class="@if( Route::is('subjects*') ) active @endif"><i class="iconColor3 flaticon-idea-2"></i> التحصيلي </a>
                	<ul> 
						@foreach ( $elta7sely as $itemTa7 )
							<li><a href="{{ route('exSubjects', ['id' => $itemTa7->id]) }}">{{ $itemTa7->name }}</a></li>
						@endforeach
                		 <!--<li><a href="{{ route('exSubjects', ['id' => '67']) }}">الرياضيات </a></li> -->
                		 <!--<li><a href="{{ route('exSubjects', ['id' => '69']) }}">الكيمياء </a></li> -->
                		 <!--<li><a href="{{ route('exSubjects', ['id' => '68']) }}"> الفيزياء </a></li> -->
                		 <!--<li><a href="{{ route('exSubjects', ['id' => '70']) }}"> اﻷحياء </a></li> -->
                		 <!--<li><a href="{{ route('exSubjects', ['id' => '3']) }}"> التجميعات </a></li> -->
                	</ul>
                </li> 
				 @endif
				<?php 
					$roles = json_decode($USER_PACKAGE->package->roles); 
					?>
					<?php  if (isset($roles->achievements) && !$roles->achievements): ?>
				<li><a href="javascript:;"class="@if( Route::is('subjects*') ) active @endif"><i class="iconColor3 flaticon-idea-2"></i> التحصيلي </a>
                	<ul> 
						@foreach ( $elta7sely as $itemTa7 )
							<li><a>{{ $itemTa7->name }}</a></li>
						@endforeach
                		<!-- <li><a >الرياضيات </a></li> -->
                		<!-- <li><a >الكيمياء </a></li> -->
                		<!-- <li><a > الفيزياء </a></li> -->
                		<!-- <li><a > اﻷحياء </a></li> -->
                		<!-- <li><a > التجميعات </a></li> -->
                	</ul>
                </li> 
 

                @endif
                
                
                @if (json_decode($USER_PACKAGE->package->roles)->foundation)
                <li><a href="{{ route('start') }}"><i class="iconColor4 flaticon-education"></i>التأسيس</a></li>
				@elseif (!json_decode($USER_PACKAGE->package->roles)->foundation)
				<li><a ><i class="iconColor4 flaticon-education"></i>التأسيس</a></li>
                @endif
                
                @if (json_decode($USER_PACKAGE->package->roles)->challenges)
                <li><a href="{{ route('challenges') }}"><i class="iconColor5 flaticon-discussion"></i>المسابقات</a></li>
				@elseif (!json_decode($USER_PACKAGE->package->roles)->challenges)
				<li><a ><i class="iconColor5 flaticon-discussion"></i>المسابقات</a></li>
                @endif
               
                @if (json_decode($USER_PACKAGE->package->roles)->courses)
					<li><a href="{{ route('courses') }}"><i class="iconColor6 flaticon-online-education"></i>الدورات المتقدمة</a></li>
								
					<li><a href="{{ route('rate') }}"><i class="iconColor7 flaticon-rating"></i>التقييم</a></li>
		
					<li>
						<a href="{{ route('community') }}" class="@if( Route::is('community*') ) active @endif"><i class="iconColor9 flaticon-question-1"></i>المنتدى الاجتماعى</a>
						<ul>
							@if (json_decode($USER_PACKAGE->package->roles)->comunity)
								<li><a href="{{ route('community') }}" class="@if( Route::is('community') ) active @endif" > مجتمع المنصه</a></li>

							@endif
							<li><a href="{{ route('community_new_post') }}" class="@if( Route::is('community_new_post') ) active @endif" >اضافة موضوع جديد</a></li>
						</ul>
					</li>
		
					@if (json_decode($USER_PACKAGE->package->roles)->ask_teacher)
					<li>
						<a href="{{ route('askTeacher') }}" class="@if( Route::is('askTeacher*') ) active @endif"><i class="iconColor9 flaticon-question-1"></i>اسئل معلم</a>
						<ul>
							@if( $CURRENT_USER_ROLE != 'teacher' )
							<li>
								<a href="{{ route('askTeacher') }}" class="@if( Route::is('askTeacher') ) active @endif"> اسئل معلم  </a>
							</li>
							<li>
								<a href="{{ route('askTeacherMine') }}" class="@if( Route::is('askTeacherMine') ) active @endif"> قائمة اسئلتى </a>
							</li>
							@else
							<li>
								<a href="{{ route('askTeacherList') }}" class="@if( Route::is('askTeacherList') ) active @endif" > قائمة الاسئلة </a>
							</li>
							@endif
						</ul>
					</li>
					@endif
				@elseif (!json_decode($USER_PACKAGE->package->roles)->courses)
					<li><a ><i class="iconColor6 flaticon-online-education"></i>الدورات المتقدمة</a></li>
							
					<li><a ><i class="iconColor7 flaticon-rating"></i>التقييم</a></li>
		
					<li>
						<a class="@if( Route::is('community*') ) active @endif"><i class="iconColor9 flaticon-question-1"></i>المنتدى الاجتماعى</a>
						<ul>
								<li><a class="@if( Route::is('community') ) active @endif" > مجتمع المنصه</a></li>

							<li><a class="@if( Route::is('community_new_post') ) active @endif" >اضافة موضوع جديد</a></li>
						</ul>
					</li>
		
					<li>
						<a  class="@if( Route::is('askTeacher*') ) active @endif"><i class="iconColor9 flaticon-question-1"></i>اسئل معلم</a>
						<ul>
							<li>
								<a class="@if( Route::is('askTeacher') ) active @endif"> اسئل معلم  </a>
							</li>
							<li>
								<a  class="@if( Route::is('askTeacherMine') ) active @endif"> قائمة اسئلتى </a>
							</li>
							<li>
								<a  class="@if( Route::is('askTeacherList') ) active @endif" > قائمة الاسئلة </a>
							</li>
						</ul>
					</li>
				@endif


 			@else

				<li><a  class="@if( Route::is('bank*') ) active @endif"><i class="iconColor1 flaticon-information"></i>بنك الأسئلة</a></li>
				
				<li><a  class="@if( Route::is('exam*') ) active @endif"><i class="iconColor2 flaticon-testing"></i>اختبار تجريبى </a>
					<ul>
					<li><a >اختبار تجريبى جديد </a></li>
					<li><a >انجازاتى </a></li>
					</ul>
				</li> 
				
				<li><a href="javascript:;"class="@if( Route::is('subjects*') ) active @endif"><i class="iconColor3 flaticon-idea-3"></i>اختبار القدرات </a>
					<ul> 
						<li><a >كمي </a></li>
						<li><a >لفظي </a></li>
						<li><a >التغيرات الجديدة لفظي </a></li>
						<li><a >الجديدة كمي </a></li>
					</ul>
				</li> 

				<li><a href="javascript:;"class="@if( Route::is('subjects*') ) active @endif"><i class="iconColor3 flaticon-idea-2"></i> التحصيلي </a>
					<ul> 
						<li><a >الرياضيات </a></li>
						<li><a >الكيمياء </a></li>
						<li><a > الفيزياء </a></li>
						<li><a > اﻷحياء </a></li>
						<li><a > التجميعات </a></li>
					</ul>
				</li> 

				<li><a ><i class="iconColor4 flaticon-education"></i>التأسيس</a></li>

				<li><a ><i class="iconColor5 flaticon-discussion"></i>المسابقات</a></li>
				
				<li><a ><i class="iconColor6 flaticon-online-education"></i>الدورات المتقدمة</a></li>
							
				<li><a ><i class="iconColor7 flaticon-rating"></i>التقييم</a></li>
	
				<li>
					<a  class="@if( Route::is('community*') ) active @endif"><i class="iconColor9 flaticon-question-1"></i>المنتدى الاجتماعى</a>
					<ul>
							<li><a  class="@if( Route::is('community') ) active @endif" > مجتمع المنصه</a></li>
						<li><a  class="@if( Route::is('community_new_post') ) active @endif" >اضافة موضوع جديد</a></li>
					</ul>
				</li>
	
				<li>
					<a  class="@if( Route::is('askTeacher*') ) active @endif"><i class="iconColor9 flaticon-question-1"></i>اسئل معلم</a>
					<ul>
						<li>
							<a  class="@if( Route::is('askTeacher') ) active @endif"> اسئل معلم  </a>
						</li>
						<li>
							<a  class="@if( Route::is('askTeacherMine') ) active @endif"> قائمة اسئلتى </a>
						</li>
						<li>
							<a  class="@if( Route::is('askTeacherList') ) active @endif" > قائمة الاسئلة </a>
						</li>
					</ul>
				</li>

            @endif

			<li><a href="{{ route('rewards') }}"><i class="iconColor10 flaticon-giftbox"></i>المكافئات</a></li>
			<li><a href="{{ route('wishlist') }}"  class="@if( Route::is('wishlist') ) active @endif"><i class="iconColor12 flaticon-save"></i>الأسئلة المحفوظة</a></li>
		</ul>
		@endif
		
    </div>

    @yield('Content')
    
    <div id="modalShare" class="modalShare modal fade order-box" role="dialog">
          <div class="modal-dialog">
                        
            <div class="modal-content">
    
                <div class="modal-body">
    
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h2 class="title">شارك :</h2>
					
					<div style="direction:ltr !important">
						<div class="sharethis-inline-share-buttons" data-url="{{ $shareThis ?? '' }}"></div>
					</div>
                </div>
            </div>
        </div>
    </div>
    
	@include('frontend.includes.dashboard-footer') 
    
<style>
	#st_gdpr_iframe {
		right: -5000px !important;
    	left: auto !important;
	}
	.modalQues img{
		max-width:100% !important;
	}

	@media (max-width: 1170px) {
		.Breadcrumb{
			padding: 27px 0 !important
		}
	}
	
	
	ul.linksCpanel li a:not([href]) {
    color: white;
    cursor: not-allowed;
    opacity: 0.5;
}

ul.linksCpanel li a:not([href]):hover::before {
    content: "برجاء الاشتراك في الباقة المناسبة لك";
    position: absolute;
    background: #0074D9;
    color: #fff;
    padding: 5px;
    border-radius: 4px;
    top: -10px;
    left: 0;
    display: inline-block;
    white-space: nowrap;
    z-index: 3;
}
</style>