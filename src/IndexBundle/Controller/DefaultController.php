<?php

namespace IndexBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @Method("GET")
     */
    public function indexAction()
    {        
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
