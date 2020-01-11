
var noteList = require("../db/db.json");
const fs = require("fs")

let i = 0, ln = noteList.length;
  for (i; i<ln; i++){
    noteList[i].id = i+1;
  }

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  

  app.get("/api/notes", function(req, res) {
    
    res.json(noteList);
  });

  app.post("/api/notes", function(req, res) {
   
    
    var newNote = req.body
    if(noteList.length > 0){
    newNote.id = noteList[noteList.length-1].id + 1}
    else {
      newNote.id=1
    }
    noteList.push(newNote);

    // const tempNote = noteList
    
    fs.writeFile('./db/db.json', JSON.stringify(noteList), (results,err)=>{
      if (err) console.log(err)
      res.json(results)
    })
  });


  app.delete("/api/notes/:id", function(req, res){
    // let id = parseInt(req.params.id);
//  console.log(id);
//  const deleter = noteList[id];
 const deleter = noteList.findIndex(location=>location.id === parseInt(req.params.id))
    noteList.splice(deleter,1)

    fs.writeFile('./db/db.json', JSON.stringify(noteList), (results,err)=>{
      if (err) console.log(err)
      res.json(results)
    })
    
    // delayedSend(res, '');
  });

};