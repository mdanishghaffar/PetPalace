import mongoose from 'mongoose'

const connectDB=async ()=> {
    try {
        const conn =await mongoose.connect(process.env.MONDGO_URL)
        console.log(`Connected to the Mongo DB Successfully ${conn.connection.host}`)
    } catch (error) {
        console.log(`Database Error ${error}`)
    }

}
export default connectDB;