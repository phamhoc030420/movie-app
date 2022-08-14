const Course = require('../models/Course');
const { mutipleMongoseToObject } = require('../../util/mongose');
class SiteController {
    // [GET] /
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongoseToObject(courses)
                });
            })
            .catch(error => next(error));

        // res.render('home');
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
