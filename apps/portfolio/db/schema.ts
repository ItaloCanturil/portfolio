import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';


export const projects = sqliteTable('projects', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  description: text('title').notNull(),
  badge: text('title').notNull(),
  views: integer('views').default(0),
});

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  createdAt: text('created_at')
  .default(sql`(CURRENT_TIMESTAMP)`)
  .notNull(),
  updateAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
  views: integer('views').default(0),
  likes: integer('views').default(0),
});

export type InsertProjects = typeof projects.$inferInsert;
export type SelectProjects = typeof projects.$inferSelect;

export type InsertPost = typeof posts.$inferInsert;
export type SelectPost = typeof posts.$inferSelect;
