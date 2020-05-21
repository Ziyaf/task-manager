const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const Task = mongoose.model('Task', {
    discription:{
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    // password: {
    //     type: String,
    //     required: true,
    //     trim:true,
    //     minlength: 6,
    //     validate(value){
    //         if(validator.contains(value, 'password')){
    //             throw new Error('The password should not contain the word password in it')
    //         }
    //     }
    // }
})

const task = new Task({
    discription: 'Start the M word',
    completed: true
})

task.save().then((result)=>{
    console.log('Task successfully added')
}).catch((error)=>{
    console.log(error)
})

// const t1 = new Task({
//     discription: 'Read The lean startup',
//     completed: true,
//     password: 'password'
// })

// t1.save().then(()=>{
//     console.log(t1)
// }).catch((error)=>{
//     console.log(error)
// })