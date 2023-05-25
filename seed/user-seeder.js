var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/HRMS');

var users = [

    new User({
        type: 'project_manager',
        email: 'pm@pm.com',
        password: bcrypt.hashSync('pm1234', bcrypt.genSaltSync(5), null),
        name: 'Project manager',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0333-4552191',
    }),
    new User({

        type: 'accounts_manager',
        email: 'am@am.com',
        password: bcrypt.hashSync('am1234', bcrypt.genSaltSync(5), null),
        name: 'Accounts Manager',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4814710',
    }),
    new User({
        type: 'employee',
        email: 'Garnacho@gmail.com',
        password: bcrypt.hashSync('123456', bcrypt.genSaltSync(5), null),
        name: 'Alejandro Garnacho',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0333-4552191',
    }),
    new User({

        type: 'employee',
        email: 'Olinga@outlook.com',
        password: bcrypt.hashSync('123456', bcrypt.genSaltSync(5), null),
        name: 'Olinga Mandara',
        dateOfBirth: new Date('1990-05-24'),
        contactNumber: '0300-4814710',
    }),
    new User({

        type: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('admin123', bcrypt.genSaltSync(5), null),
        name: 'Issa Mhando',
        dateOfBirth: new Date('1999-04-14'),
        contactNumber: '0300-4297859',
    }),
];
//save function is asynchronous
//so we need to ceck all itmes are saved before we disconnect to db
done = 0;
for (i = 0; i < users.length; i++) {
    users[i].save(function(err, result) {
        done++;
        if (done == users.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}