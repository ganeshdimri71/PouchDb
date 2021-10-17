import React from 'react'
import pouchdb from 'pouchdb'

//To Create the database...!
var db = new pouchdb('GaneshDimri')
 export function PouchDB() {
    //  console.log(db)
    //  db.info().then((info) => {
    //     console.log('The data is created successfully...!')
    //  })
    
// To insert the value in the database...!
     
    //  var doc = {
    //      _id: '200',
    //      name: "Ganesh Dimri",
    //      age: 27,
    //      email:"ganeshdimri71@gmil.com"
    //  }

    //  db.put(doc, function (err, res) {
    //      if (err) {
    //          console.log('The error is : ', err)
    //      }
    //      else {
    //          console.log('The data inserted is : ', doc)
    //      }
    //  })
     
     // Inserting the Multiple Data :
    //  var doc1 = {
    //      _id: '201',
    //      name: "Urmila Dimri",
    //      age: 27,
    //      email:"urmiladimri@gmil.com"
    //  }
    //  var doc2 = {
    //      _id: '202',
    //      name: "Sanjay Dimri",
    //      age: 24,
    //      email:"sanjaydimri@gmil.com"
    //  }
    //  var doc3 = {
    //      _id: '204',
    //      name: "Palayshwar Dimri",
    //      age: 27,
    //      email:"palayshwardimri@gmil.com"
    //  }

    //  var docAll = [doc1, doc2, doc3]

     

    //  db.bulkDocs(docAll, function (err, res) {
    //      if (err) {
    //          console.log('The error is : ', err)
    //      }
    //      else {
    //          console.log('The data inserted is : ', docAll)
    //      }
    //  })
     
     // To get the values...!

    //    db.get('200', function (err, res) {
    //      if (err) {
    //          console.log('The error is : ', err)
    //      }
    //      else {
    //          console.log('The data is : ', res)
    //      }
    //  })
     
     // To Update the data we will need the rev id:

    //   
     
     // For reading the batch of document

    //  db.allDocs(function (err, res) {
    //      if (err) {
    //          console.log(err)
    //      } else {
    //          console.log('The value is : ', res.rows)
    //      }
    //  })
     
     // To get the numbers of rows 
    //  db.allDocs({include_docs:true},function (err, res) {
    //      if (err) {
    //          console.log(err)
    //      } else {
    //          console.log('The value is : ', res)
    //      }
    //  })
     
     //To delete the particular doc

    //  db.remove('200', function (err,res) {
    //      if (err) {
    //          console.log(err)
    //      }
    //      else {
    //          console.log(res)
    //      }
    //  })
     
     // To delee the bulk data
    //  var doc = [
    //      {
    //          _id: "201", _rev:"2-45091e93396dbaca09e57bf220861435"
    //      },
    //      {
    //          _id: "202", _rev:"1-2269d1de71d805515bbf2267f2597822"
    //      },
    //      {
    //          _id: "202", _rev:"1-2269d1de71d805515bbf2267f2597822"
    //      },
    //      {
    //          _id: "204", _rev:"1-ee36b9dcd913afd5fa36fb4386e98462"
    //      },
    //  ]

    //  db.bulkDocs(doc, function (err) {
    //      if (err) {
    //         console.log(err)
    //      }
    //      else {
    //          console.log('Data is deleted...!')
    //      }
    // })
     
     // Destroying the database...!
     db.destroy(function (err, res) {
         if (err) {
             console.log(err)

         }
         else {
             console.log('Database is deleted...!')
         }
     })



     
     

}


