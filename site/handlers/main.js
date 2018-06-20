var fortune = require('../lib/fortune.js');

exports.home=function(req,res){
    res.render('home')
};

exports.about=function(req,res){
    res.render('about',{
        fortune:fortune.getFortune(),
        pageTestScript:'/qa/tests-about.js'
    })
};

exports.hood_river=function(req,res){
    res.render('tours/hood-river');
};

exports.request_group_rate=function(req,res){
    res.render('tours/request-group-rate');
};