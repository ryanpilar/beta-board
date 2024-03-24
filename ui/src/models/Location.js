// Require Mongoose
import mongoose from 'mongoose'

// Define a schema
const Schema = mongoose.Schema

const LocationSchema = new Schema({
    name: string,
    zone: ['Zone1', 'Zone2', 'Zone3']
})

// Export as a mongoose model
// The user Schema is defined above
export default mongoose.model('Location', LocationSchema)
