exports.home=function(req,res){
    res.type('text/plain');
    res.send('Medowlark Travel');
};

exports.about=function(req,res){
    res.type('text/plain');
    res.send('About Meadowlark Travel');
};