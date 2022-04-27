import mongoose from "mongoose";
const schema = new mongoose.Schema({
    first_name: {type: "string", require: "true"},
    last_name: {type: String, require: true},
    cpf: {type: Number, required: [true, 'CPF is required']}
});
schema.path('cpf').validate({
    validator: async (value: any) => { return await mongoose.models.Client.countDocuments({cpf: value }) == 0},
    message: function(props: any) {
      return `CPF already exists`;
    }
  });
export default mongoose.model('Client', schema);