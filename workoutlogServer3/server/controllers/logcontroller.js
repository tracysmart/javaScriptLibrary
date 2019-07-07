var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Log = sequelize.import('../models/log');

/*************************************
* GET ALL ITEMS FOR INDIVIDUAL USER
*************************************/
router.get('/log', function (req, res) {
    var userid = req.user.id;

    Log.findAll({
            where: { owner: userid }
        })
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});

/*************************************
* POST SINGLE ITEM FOR INDIVIDUAL USER
*************************************/
router.post('/log', function (req, res) {
    var owner = req.user.id;
    var log = req.body.log.item;

    Log.create({
            description: req.body.log.description,
            definition: req.body.log.definition,
            result:req.body.log.result,
            owner: owner
        })
        .then(
            function createSuccess(log) {
                res.json({
                    log: log
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
        );
});

/******************
* GET SINGLE ITEM FOR INDIVIDUAL USER
******************/
router.get('/:id', function(req, res) {
    var data = req.params.id;
    var userid = req.user.id;

    Log
        .findOne({
            where: { id: data, owner: userid }
        }).then(
            function findOneSuccess(data) {
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
        );
});

/******************
* DELETE ITEM FOR INDIVIDUAL USER
******************/
        //1                //2
        router.delete('/:id', function(req, res) {
            var data = req.params.id; //3
            var userid = req.user.id; //4
        
            Log
                .destroy({ //5
                    where: { id: data, owner: userid } //6
                }).then(
                    function deleteLogSuccess(data){ //7
                        res.send("you removed a log");
                    },
                    function deleteLogError(err){ //8
                        res.send(500, err.message);
                    }
                );
        });


/******************
* UPDATE ITEM FOR INDIVIDUAL USER
******************/
       //1    //2
router.put('/:id', function(req, res) {
    var data = req.params.id; //3
    var log = req.body.log.item; //4

    Log
        .update({ //5
            log: log //6
        },
        {where: {id: data}} //7
        ).then(
            function updateSuccess(updatedLog) { //8
                res.json({
                    log: log
                });            
            },
            function updateError(err){ //9
                res.send(500, err.message);
            }
        )
});
        

module.exports = router;