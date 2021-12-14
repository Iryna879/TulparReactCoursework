let department = require('../models/department');

/*exports.all = function (req, res) {
    department.all(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}*/

exports.findAll = (req, res) => {
    department.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Что-то случилось во время получения всех пользователей"
            });
        else
           /* res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');*/
        // я оставлю заголовки, получаемые с сервера, в таком виде, но конечно в реальном продакшене лучше переписать под конкретный origin
        // ну или вы делаете open API какой-нибудь, тогда делаете что хотите
        res.send(data);
    });
};