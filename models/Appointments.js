import mongoose from 'mongoose';
const { Schema } = mongoose;
    
const Appointment = new Schema({
  hospitalId: {type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fees: { type: String, required: true },
  appointmentDate: { type:String, required: true  },
  appointmentTime: { type:String, required: true  },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  date: { type: Date, default: Date.now },
},{ timestamps: true });

export default mongoose.model('Appointment', Appointment);