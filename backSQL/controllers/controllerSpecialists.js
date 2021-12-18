let department = require('../models/specialists');

exports.findAll = (req, res) => {
    department.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Что-то случилось во время получения всех специалистов"
            });
        else
            res.send(data);
    });
};