var Crime = require("../models/crime");
var mongoosePaginate = require('mongoose-paginate');


//ajouter un crime
exports.insertCrime = function(req, res) {
	
    compnos = req.body.compnos;
    naturecode = req.body.naturecode;
    incident_type_description = req.body.incident_type_description;
    main_crimecode = req.body.main_crimecode;
    reptdistrict = req.body.reptdistrict;
    reportingarea = req.body.reportingarea;
    fromdate = req.body.fromdate;
    weapontype = req.body.weapontype;
    shooting = req.body.shooting;
    domestic = req.body.domestic;
    shift = req.body.shift;
    year = req.body.year;
    month = req.body.month;
    day_week = req.body.day_week;
    ucrpart = req.body.ucrpart;
    x = req.body.x;
    y = req.body.y;
    streetname = req.body.streetname;
    xstreetname = req.body.xstreetname;
    location = req.body.location_crime;
    
    var monCrime = new Crime({ 
		"compnos" : compnos,
		"naturecode" : naturecode,
		"incident_type_description" : incident_type_description,
		"main_crimecode" : main_crimecode,
		"reptdistrict" : reptdistrict,
		"reportingarea" : reportingarea,
		"fromdate" : fromdate,
		"weapontype" : weapontype,
		"shooting" : shooting,
		"domestic" : domestic,
		"shift" : shift,
		"year" : year,
		"month" : month,
		"day_week" : day_week,
		"ucrpart" : ucrpart,
		"x" : x,
		"y" : y,
		"streetname" : streetname,
		"xstreetname" : xstreetname,
		"location" : location
	});

    
    monCrime.save(function (err, results) {
        if(err) throw err;
        console.log(results);
        if(results.length > 0)
            res.json({"success" : true});
        else
            res.json({"success" : false});
    });
    return;
}

//afficher les crimes
exports.findAllCrime = function(req, res) {
	Crime.find({}, function (err, results) {
		if(err) throw err;
		res.json(results);
		console.log('Affichage de la liste des données.');
	});
};

//test affichage des crimes avec pagination
exports.findAllCrimePaginate = function(req, res) {
	// Crime.find({}, function (err, results) {
	// 	if(err) throw err;
	// 	res.json(results);
	// 	console.log('Affichage de la liste des données.');
	// });

	Crime.paginate({}, { page: req.params.page, limit: parseInt(req.params.items) }, function(err, result) {
	  // result.docs
	  // result.total
	  // result.limit - 10
	  // result.page - 3
	  // result.pages
  		if(err) throw err;
		res.json(result);
		console.log('Affichage de la liste des données.');
	});
};

//delete par crime Id
exports.deleteCrime = function(req,res){
	Crime.find({"_id": req.params.id} ,function(err,results){
		if(err) throw err;
		Crime.remove({"_id": req.params.id} ,function(err){
			if(err) throw err;
				console.log("Crime supprimé");
		});
		
	});
};

//update par crime Id
exports.updateCrime = function(req,res){
	Crime.findOneAndUpdate({"_id": req.params.id},  {"naturecode": "segolenEtna" } ,function(err,results){
		if(err) throw err;
		console.log('Document modifié');
	});
};

//afficher un crime par ID
exports.findbyId = function(req,res){
	Crime.find({"_id": req.params.id} ,function(err,results){
		if(err) throw err;
		res.json(results);
		console.log("CrimeById trouvé");
	});
};
