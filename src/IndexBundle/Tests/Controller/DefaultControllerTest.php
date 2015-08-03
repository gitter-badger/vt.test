<?php

namespace IndexBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    private $client;
    
    public function setUp() {  
        $this->client = static::createClient();
    }
    
    public function testIndex()
    {
        $crawler = $this->client->request('GET', '/');
        // Test if response is OK
        $this->assertSame(200, $this->client->getResponse()->getStatusCode());
        
        // Test index page has ng-cloak class on body element
        $this->assertTrue($crawler->filter('body.ng-cloak')->count() > 0);
        // Test index page has section with data-ui-view attribute
        $this->assertTrue($crawler->filter('section[data-ui-view]')->count() > 0);
    }
    
    public function testTemplate()
    {
        $crawler = $this->client->request('GET', '/view/home.view.html');
        // Test if response is OK
        $this->assertSame(200, $this->client->getResponse()->getStatusCode());
        
        // Test index page has section with data-ui-view attribute
        $this->assertTrue($crawler->filter('section[data-ng-controller="HomeController as home"]')->count() > 0);
        // Test returned template has the following text in it
        $this->assertTrue($crawler->filter('html:contains("Inclusief alternatieve luchthavens")')->count() > 0);
    }
    
    public function testAutocomplete()
    {
        // Test successful request
        $this->client->request('GET', '/api/locations/kie');
        $response = $this->client->getResponse();
        // Test if response is OK
        $this->assertSame(200, $this->client->getResponse()->getStatusCode());
        // Test if Content-Type is valid application/json
        $this->assertSame('application/json', $response->headers->get('Content-Type'));
        // Test if request returns expected response
        $this->assertEquals('{"data":[{"Code":"KEL","DisplayName":"Kiel, KEL, Duitsland","LocationType":"Airport"},{"Code":"KBP","DisplayName":"Kiev (Borispol), KBP, Oekra\u00efne","LocationType":"Airport"}]}', $response->getContent());
        // Test that response is not empty
        $this->assertNotEmpty($this->client->getResponse()->getContent());
        
        // Test unsuccessful request
        $this->client->request('GET', '/api/locations/bid');
        $response = $this->client->getResponse();
        // Test if response is OK
        $this->assertSame(200, $this->client->getResponse()->getStatusCode());
        // Test if Content-Type is valid application/json
        $this->assertSame('application/json', $response->headers->get('Content-Type'));
        // Test if request returns expected response
        $this->assertEquals('{"data":[{"Code":"","DisplayName":"No results","LocationType":"Unkown"}]}', $response->getContent());
        // Test that response is not empty
        $this->assertNotEmpty($this->client->getResponse()->getContent());
    }
}
