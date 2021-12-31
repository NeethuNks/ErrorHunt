const mongoose = require('mongoose');
//Part #2 Point 9
mongoose.connect('mongodb+srv://Neethu:Neethu123@cluster0.s5tyz.mongodb.net/ErrorHunt?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;