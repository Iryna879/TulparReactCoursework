let db = require('../db');

/*const Department = function(department) {
    this.title = department.title;
    this.phone = department.phone;
};*/
exports.getAll = (result) => {
    db.query("SELECT * FROM department", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("department: ", res);
        result(null, res);
    });
};