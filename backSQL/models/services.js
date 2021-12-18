let db = require('../db');

/*const Department = function(department) {
    this.title = department.title;
    this.phone = department.phone;
};*/
exports.getAll = (result) => {
    db.query("SELECT idIntermediateDepSer, title, phone, service, price FROM intermediatedepser, department, services WHERE  intermediatedepser.idDep = department.idDepartment AND intermediatedepser.idSer = services.idServices", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("department: ", res);
        result(null, res);
    });
};