const Course = require('../models/Course');
const { mutipleMongoseToObject, mongoseToObject } = require('../../util/mongose');
class MeController {

    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        // const PAGE_SIZE = 2;
        // var page = req.query.page;
        let courseQuery = Course.find({});
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            });
        }

        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: mutipleMongoseToObject(courses),
                }),

            )
            .catch(next);

    }
    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses: mutipleMongoseToObject(courses)
            }))
            .catch(next);
    }

}
module.exports = new MeController();
