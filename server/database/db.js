import mongoose from 'mongoose';


const Connection = async () => {
    try {
    const URL = 'mongodb+srv://Sourabh:los130896@blogs-website.ix6nn.mongodb.net/Blogs-Website?retryWrites=true&w=majority'

   await mongoose.connect(URL , { useNewUrlParser: true, useUnifiedTopology: true /* useFindAndModify: false */ });
   console.log("Database connection established successfully");
}catch(error) {
    console.log(error);
}
}

export default Connection;