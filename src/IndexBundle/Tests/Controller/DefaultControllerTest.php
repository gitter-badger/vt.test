<?php

namespace IndexBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
//    public function testIndex()
//    {
//        $client = static::createClient();
//
//        $crawler = $client->request('GET', '/');
//
//        $this->assertTrue($crawler->filter('html:contains("TEST")')->count() > 0);
//    }
    
    public function testTemplate()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/view/home.view.html');

        $this->assertTrue($crawler->filter('html:contains("Inclusief alternatieve luchthavens")')->count() > 0);
    }
}
