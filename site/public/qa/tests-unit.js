// var fortune = require('E:\\projects\\mealowlark\\site\\lib\\fortune.js');
var fortune = require('../../lib/fortune.js');
var expect = require('chai').expect;

suite('Fortune cookie tests', function(){

    test('getFortune() should return a fortune', function(){
        //console.log(__dirname);
        expect(typeof fortune.getFortune() === 'string');
    });

});
