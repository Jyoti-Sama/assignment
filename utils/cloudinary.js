import dotenv from 'dotenv';
dotenv.config();
import cloudi from 'cloudinary';

const cloudinary = cloudi.v2;

cloudinary.config({ 
    cloud_name: process.env.cloudinary_cloud_name, 
    api_key: process.env.cloudinary_api_key, 
    api_secret: process.env.cloudinary_api_secret 
  });

export default cloudinary;