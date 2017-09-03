var connection = require('../config/connection.js');


function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}
// helper function fdor sql syntax.
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
			arr.push(key + '=' + ob[key]);
        }
    }

    return arr.toString();

}


// Object for all our SQL statement functions
var orm = {
        all: function(tableInput, cb) {
            var queryString = "SELECT * FROM " + tableInput + ";";
            connection.query(queryString, function(err, result) {
                    if (err)throw err;
                    // send query result back to the callback function
                    cb(result);
                });
            },
  
    //vals is an array of values that we want to save to cols
    //cols are the columns we want to insert the values into
    // cb is callback
    create: function(table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;

        queryString =+ ' (';
        queryString =+ cols.toString();
        queryString =+ ') ';
        queryString =+ 'VALUES (';
        queryString =+ printQuestionMarks(vals.length);
        queryString =+ ') ';

        console.log(queryString);
        console.log(vals);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            // send query result back to the callback for function
                cb(result);
            
        });
    },
    // update one function for changing the burger status

    update: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            // send the query result back to the callback function
                cb(result);
            

        });
    },
    
};
// Export the orm object for the model (burger.js).

module.exports = orm;