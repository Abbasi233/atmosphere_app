const users = require('./user.js');
const response = require('./response.js');

App = (app)=>{
    app.use('/api/v1/users', function(req,res) {
      users  
    }),
    app.use('/api/v1/response', function(req,res) {
        response
    })
};

module.export = App;

