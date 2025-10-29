<?php

namespace App\Services;

use App\Repositories\PackageRepository;

class PackageService extends BaseService{

    protected $packageRepository;

    public function __construct(PackageRepository $packageRepository)
    {
        parent::__construct($packageRepository) ;
    }

    public function getAvailablePkgsForPoints(int $points = 0){
       $result =  $this->repo->where('status', 1)->where('points', '<=', $points)->where('points', '>', 0)->get();
       return $result;
    }


    public function getAvailablePackages(){
        
            // $result =  $this->repo->where('status', 1)->get();
        $primaryPackages =  $this->repo->where('status', 1)->whereIn('id', [5,6,7])->get();
        $secondaryPackages =  $this->repo->where('status', 1)->whereNotIn('id', [5,6,7])->get();
        return ['primary'=>$primaryPackages,'secondary'=>$secondaryPackages];
  
          }



}



?>