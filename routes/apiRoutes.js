
var noteList = require("../db/db.json");

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
    newNote.id = noteList[noteList.length-1].id + 1

    
    noteList.push(newNote);
  // noteList.push(req.body);
      res.json(true);
     
  });
  
  app.get("/api/notes/:id", function(req, res) {
    var chosen = req.params.noteList;

    return res.json(noteList)
    console.log(chosen);
  
    // for (var i = 0; i < characters.length; i++) {
    //   if (chosen === characters[i].routeName) {
    //     return res.json(characters[i]);
    //   }
    // }
  
    // return res.json(false);
  });

  app.delete("/api/notes/:id", function(req, res){
    let id = parseInt(req.params.id);
 
    delete articles[id];
    
    delayedSend(res, '');
  });

};