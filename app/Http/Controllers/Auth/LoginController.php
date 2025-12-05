<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\SiteMeta;
use Illuminate\Validation\ValidationException;

class LoginController extends FrontendController
{
    use SiteMeta;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logoutUser');
        $this->setMeta('title', 'تسجيل الدخول');
        $this->registerSiteMeta();
    }

    /**
     * Show the application's login form.
     *
     * @return \Illuminate\View\View
     */
    public function showLoginForm()
    {
        return view('frontend/login');
    }

    /**
     * Handle a login request to the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::guard('web')->attempt($request->only('email', 'password'), $request->filled('remember'))) {
            $request->session()->regenerate();
            $user = Auth::guard('web')->user();

            // The same redirection logic from the old code
            $this->authenticated($request, $user);

            return redirect()->intended($this->redirectTo);
        }

        throw ValidationException::withMessages([
            'email' => [trans('auth.failed')],
        ]);
    }

    /**
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function authenticated(Request $request, $user)
    {
        $request->session()->flash('toast-success', 'مرحباً ' . $user->name . '، تم تسجيل الدخول بنجاح');

        if (!$user->Payments()->where('status', 1)->count()) {
            $this->redirectTo = route('packages');
        } else {
            $this->redirectTo = route('cpanel');
        }
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logoutUser(Request $request)
    {
        $message = 'إلى اللقاء ' . Auth::user()->name . '، تم تسجيل الخروج بنجاح';
        
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        $request->session()->flash('toast-success', $message);

        return redirect('/');
    }
}