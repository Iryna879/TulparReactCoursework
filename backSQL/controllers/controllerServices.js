let services = require('../models/services');


exports.findAll = (req, res) => {
    services.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Щось трапилося під час отримання всіх користувачів"
            });
        else
           /* res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');*/
        res.send(data);
    });
};