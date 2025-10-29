<?php

namespace App\Providers;

use App\Models\Taxonomy;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use App\Packages;



class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
            Schema::defaultStringLength(191);
            
            view()->share('packages', Packages::where('status',true)->get());
            view()->share('e5tbarKodrat',Taxonomy::select('id','name')->where('type','subject')->whereIn('id',[23,24,49,54])->get());
            view()->share('elta7sely',Taxonomy::select('id','name')->where('type','subject')->whereIn('id',[67,69,68,70])->get());


    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
