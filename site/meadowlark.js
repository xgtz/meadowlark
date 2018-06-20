var express=require('express'),
    fs = require('fs');

var app=express();
// 设置handlebars为默认视图引擎
var handlebars=require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

var autoViews={};

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname+'/public')); //引用静态模块 

app.use(function(req,res,next){
    res.locals.showTests=app.get('env')!='production' && req.query.test==='1';
    next();
});

require('./routes.js')(app);

// 自动化的基于视图的路由
app.use(function(req,res,next){
    var path=req.path.toLocaleLowerCase();
    // 检查缓存
    if(autoViews[path]) return res.render(autoViews[path]);
    // 如果没有缓存则查看有没有对应的.handlerbars文件
    if(fs.existsSync(__dirname+'/views'+path+'.handlebars')){
        autoViews[path]=path.replace(/^\//g,'');
        return res.render(autoViews[path]);
    }
    // 没有发现转404
    next();
});

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+app.get('port')+'; Press Ctrl + C to terminate.');
});
