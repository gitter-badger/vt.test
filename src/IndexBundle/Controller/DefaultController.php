<?php

namespace IndexBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Services\Airtrade\Helpers\Autocomplete;
use Services\Airtrade\Resource\Common\Lookup;
use Symfony\Component\HttpFoundation\JsonResponse;

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
     * @Route("/view/{partials}/{name}", name="partials")
     * @Method("GET")
     */
    public function templateAction($partials = null, $name)
    {
        return $this->render('IndexBundle:Default:templates/' .
            ($partials ? $partials . '/': '') . $name . '.twig');
    }

    /**
     * Retrieve locations suggestion while user types in
     *
     * @Route("api/locations/{name}", name="locations_autocomplete")
     * @Method("GET")
     */
    public function searchLocationsAutocompleteAction($name)
    {
        $autocomplete = new Autocomplete($this->get('airtrade_client')->factory(), new Lookup());
        return new JsonResponse($autocomplete->getOptions($name));
    }
}
