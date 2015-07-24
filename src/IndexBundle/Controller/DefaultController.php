<?php

namespace IndexBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Services\Airtrade\TestService;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @Method("GET")
     */
    public function indexAction()
    {        
        echo 123; exit;
        $airtrade = $this->get('airtrade_client');
        $airtrade->factorys();
        return $this->render('IndexBundle:Default:index.html.twig');
    }
    
    /**
     * @Route("/view/{name}", name="templates")
     * @Method("GET")
     */
    public function templateAction(Request $request)
    {        
        return $this->render('IndexBundle:Default:templates/' . $request->get('name') . '.twig');
    }
}
