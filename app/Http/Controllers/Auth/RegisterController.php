<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Frontend\FrontendController;
use App\Services\PointsService;
use App\Services\TaxonomyService;
use App\Services\UserService;
use App\Traits\SiteMeta;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;

class RegisterController extends FrontendController
{
    use SiteMeta;

    protected $redirectTo = '/cp/packages';

    protected $userService;
    protected $pointsService;
    protected $taxService;

    public function __construct(UserService $userService, PointsService $pointsService, TaxonomyService $taxService)
    {
        $this->middleware('guest');
        $this->setMeta('title', "تسجيل حساب جديد");
        $this->registerSiteMeta();
        $this->userService = $userService;
        $this->pointsService = $pointsService;
        $this->taxService = $taxService;

        if (request()->p) {
            $this->redirectTo = '/cp/packages/' . request()->p . '/buy';
        }
    }

    protected function guard()
    {
        return Auth::guard("web");
    }

    public function showRegistrationForm(Request $request)
    {
        $stages = $this->taxService->byType('student_stage');

        if ($request->has('referer')) {
            \Session::put('referer', $request->referer);
        }

        return view('frontend.register', compact('stages'));
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
            'gender'   => ['required', Rule::in(['male', 'female'])],
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $data = $request->all();
        $data['password'] = Hash::make($data['password']);

        $user = $this->userService->add($data);

        if ($request->has('referer')) {
            // $this->pointsService->NewRegisterPoint($this->userService, $request->referer, $user);
        }
        Auth::login($user);

        $message = 'لقد تم تسجيل حسابك بنجاح، شكرا لك يا ' . $user->name;
        $request->session()->flash('toast-success', $message);
        $request->session()->flash('toast-time', 6000);
// dd($user);

        return redirect($this->redirectTo);
    }
}
