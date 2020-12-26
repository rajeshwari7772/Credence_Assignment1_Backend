var clientvar = require('mongodb').clientvar;
const { spawn }= require('child_process');
var path = "mongodb://localhost:27017/";

clientvar.connect(url, function(error,detail) {
  if (error) throw error;
  var database = Client.db("Cinema_Database_One");
  database.collection("cinema_table").find({}).toArray(function(error, result) {
    if (error) throw error;
 

    var childPython = spawn('python',['python_prgm_backend3.py',JSON.stringify(result)]);
    childPython.stdout.on('data',(data)=>{
      console.log('stdout:'+data);
    });
    childPython.stderr.on('data',(data)=>{
      console.error('stderr: ${data}');
    });

    detail.close();
  });
});