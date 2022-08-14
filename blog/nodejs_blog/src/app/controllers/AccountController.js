const Account = require('../models/Account');
const { mutipleMongoseToObject } = require('../../util/mongose');
class AccountController {
    // [GET] /
    index(req, res) {

        Account.find({},(err,acount)=>{
            if(!err){
                res.json(acount);
            }
            else{
                res.status(400).json({error:'ERROR!!'});
            }
        });
          
    };
    register(req, res, next) {
        const acc = new Account(req.body);
        acc.save()
            .then(() => res.redirect('http://localhost:3000/'))
            .catch(next);
    }
  
}
module.exports = new AccountController();
