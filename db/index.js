import 'dotenv/config';
import { drizzle } from 'drizzle-orm/tursodatabase/database';

const db = drizzle(process.env.DATABASE_URL);

export default db;
