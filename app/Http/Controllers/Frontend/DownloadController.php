<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Posts;
use App\Repositories\FrontEndRepository;
use App\Traits\SiteMeta;

class DownloadController extends Controller
{
    use SiteMeta;


    public function __construct(FrontEndRepository $frontend)
    {
        $this->frontend = $frontend;
        $this->setMeta('title', '');
        $this->registerSiteMeta();
    }
    
    public function index()
    {
        $downloads = Posts::where('status',1)->where('type', 'news')->get();
        foreach($downloads as $download){
            $download['description']=explode(' ',strip_tags($download['description']));

                }
        return view('frontend.downloads', compact('downloads'));
    }
}
