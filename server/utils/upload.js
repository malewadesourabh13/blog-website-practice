import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: 'mongodb+srv://Sourabh:los130896@blogs-website.ix6nn.mongodb.net/Blogs-Website?retryWrites=true&w=majority',
    options: { useUnifiedTopology: true, useNewUrlParser: true},
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1 ) {
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return {
            bucketName: 'photos',
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }

})

export default multer({ storage })