//mongodb+srv://Admin:admin1234@cluster0.wxemo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connection.on('connected', () => {
  console.log('MongoDB: Connection Established')
})

mongoose.connection.on('reconnected', () => {
  console.log('MongoDB: Connection Reestablished')
})

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB: Connection Disconnected')
})

mongoose.connection.on('close', () => {
  console.log('MongoDB: Connection Closed')
})

mongoose.connection.on('error', (error) => {
  console.error('MongoDB Error: ' + error)
})


const MONGODB_URL =
  'mongodb+srv://Admin:admin1234@cluster0.wxemo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const run = async () => {
  try {
    const connection =  await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
    })
    console.log("Connection successful")
  } catch (error) {
    console.error(error)
  }
}

try {
  run()
} catch (error) {
  console.error(error)
}
