import moment from 'moment';
import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    client: {type: mongoose.Types.ObjectId, ref: "Client", required: true},
    date_create: {type: String, required: true, default: moment().format('YYYY-MM-DD')},
    date_expiration: {type: String, required: true},
    value: {type: Number, required: true},
    description: {type: String, required: true}
});

export default mongoose.model('Debit', schema);