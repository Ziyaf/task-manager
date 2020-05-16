
const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) =>{
    if(error){
        return console.log('Error Connecting to the client')
    }

    console.log('Connection To the Client established!')
    
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Ziyaf',
    //     age: 21
    // }, (error, result) =>{
    //     if(error){
    //         return console.log("failed to add fields to the collection")
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         discription: 'Clean the Table',
    //         completed: false
    //     },{
    //         discription: 'Clean Your Shoes',
    //         completed: false
    //     },{
    //         discription: 'Read The Lean Startup',
    //         completed: true
    //     }
    // ], (error, result) =>{
    //     if(error){
    //         return console.log('insertion failed, please try again later')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').findOne({
    //     _id: new ObjectId("5ebda2a770d0396610b1becb")
    // }, (error, result) =>{
    //     if(error){
    //         return console.log("Unable to fetch data")
    //     }

    //     console.log(result)
    // })

    // db.collection('tasks').find({
    //     completed:false
    // }).toArray((error, tasks)=>{
    //     if(error){
    //         return console.log("Unable to fetch data")
    //     }

    //     console.log(tasks)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //    $set:{completed: true} 
    // }).then((result) =>{
    //     console.log('updated succesfully \n'+ result.modifiedCount)
    // }).catch((error) =>{
    //     console.log('error: '+ error)
    // }) 

    db.collection('tasks').deleteOne({
        discription: 'Clean the Table'
    }).then((result) =>{
        console.log('Deletion successful')
    }).catch((error) =>{
        console.log('deletion unsuccessfull')
    })
})