import { text, timestamp, pgTable, uuid } from "drizzle-orm/pg-core";
export const users = pgTable("users", {
    id: uuid("id").unique().notNull().defaultRandom().primaryKey(),
    name: text("name"),
    email: text("email"),
    password: text("password"),
    role: text("role").$type<"admin" | "customer">(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").$onUpdate(()=> new Date()),
});