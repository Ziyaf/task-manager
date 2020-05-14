const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) =>{
    if(error){
        return console.log('Error Connecting to the client')
    }

    console.log('Connection To the Client established!')
    
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Ziyaf',
        age: 21
    })
})