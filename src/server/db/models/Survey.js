import mongoose from 'mongoose'

import RecipientSchema from './Recipient'

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  body: {
    type: String,
    required: true,
    trim: true,
  },

  subject: {
    type: String,
    required: true,
    trim: true,
  },

  recipients: {
    type: [RecipientSchema],
    required: true,
    trim: true,
  },

  yes: {
    type: Number,
    default: 0,
  },

  no: {
    type: Number,
    default: 0,
  },

  _user: { type: mongoose.Schema.Types.ObjectId, ref:'User'},

  dateSend: Date,
  lastResponded: Date

});

mongoose.model('survey', surveySchema);
export default mongoose.model('survey');
