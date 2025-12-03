import mongoose from 'mongoose';
const { Schema } = mongoose;
    
const Hospital = new Schema({
  hospitalName: {type:String, required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fees: { type: String, required: true },
  days: {type:String, required: true},
  time: { type:String, required: true  },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  date: { type: Date, default: Date.now },
},{ timestamps: true });

export default mongoose.model('Hospital', Hospital);