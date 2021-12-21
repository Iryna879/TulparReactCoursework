let db = require('../db');


exports.getAll = (result) => {
    db.query("SELECT idEmployees, surname, name, patronymic, job_title, title, photo, career, activity\n" +
        " FROM medicalcenterdb.employees, medicalcenterdb.department, medicalcenterdb.specialization\n" +
        "WHERE  employees.position = specialization.id_position AND employees.department = department.idDepartment", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        //console.log("department: ", res);
        result(null, res);
    });
};