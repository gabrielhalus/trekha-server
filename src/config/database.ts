import logger from '../helpers/logger';
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
    logger.info('MongoDB connected successfully');
  } catch (error: any) {
    logger.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(0);
  }
};

export default connectDB;
