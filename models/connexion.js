var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://BeniDiegoPro:yU8NvvOfgysMoxFM@cluster0.no3t1ok.mongodb.net/backofficemaxime?retryWrites=true&w=majority',
    options,
    function (err) {
        if (err) {
            console.error('Erreur de connexion à mongoDB : ' + err);
        } else {
            console.log('Connecté à la DB Portfolio Maxime')
        }
    }
)

module.exports = mongoose