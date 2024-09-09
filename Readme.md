# Video Streaming Platform API

This is a REST API for a video streaming platform where users can upload, like, and comment on videos. Additionally, users can tweet directly from the platform. The API is built using Node.js, Express, MongoDB, and several other key technologies.

## Features
- **User Authentication**: JWT-based authentication system for secure user management.
- **Video Upload**: Users can upload videos using `multer` and store them on `Cloudinary`.
- **Like and Comment**: Users can like videos and post comments.
- **Tweet Functionality**: Users can tweet about their favorite videos directly from the platform.
  
## Technologies Used
- **Node.js**: JavaScript runtime for the backend.
- **Express**: Web framework for building the REST API.
- **MongoDB**: NoSQL database for storing user and video data.
- **Multer**: Middleware for handling video file uploads.
- **Cloudinary**: Cloud storage for serving uploaded video files.
- **JWT (JSON Web Token)**: For secure authentication and authorization.
- **dotenv**: For managing environment variables.
