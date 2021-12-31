const mongoose = require('mongoose');
//Part #2 Point 9
mongoose.connect('mongodb+srv://Neethu:Neethu123@cluster0.s5tyz.mongodb.net/ErrorHunt?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;