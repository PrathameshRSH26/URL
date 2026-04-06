import { pgTable, text, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstname: varchar("firstname",{length: 55}).notNull(),
  lastname: varchar('last_name',{length: 55}),
  email: varchar({length: 55}).notNull().unique(),
  password: text().notNull(),
  salt: text().notNull(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').$onUpdate(()=> new Date()),

});