let department = require('../models/specialists');

exports.findAll = (req, res) => {
    department.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Щось трапилося під час отримання всіх користувачів"
            });
        else
            res.send(data);
    });
};