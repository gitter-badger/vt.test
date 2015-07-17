<?php

namespace IndexBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;
use Assetic\Asset\AssetCollection;
use Assetic\Asset\FileAsset;

class IndexBundle extends Bundle
{
//    public function boot()
//    {
//        $paths = array(
//            '/IndexBundle/Resources/public/js/*.js',
//            '/IndexBundle/Resources/public/js/**/*.js'
//        );
//        
//        $am = $this->container->get('assetic.asset_manager');
//        $assetCollection = new AssetCollection();
//        foreach ($paths as $path) {
//            foreach (glob(APPLICATION_PATH . $path) as $filename) {
//                $assetCollection->add(new FileAsset($filename));
//            }
//        }
//        
//        $am->set('jsModules', $assetCollection);
//    }
}
