import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as postgres from 'postgres';
import {useRuntimeConfig} from "nuxt/app";

const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig)
// for migrations
const migrationClient = postgres(runtimeConfig.databaseUrl as string, { max: 1 });
await migrate(drizzle(migrationClient), 'public')
// for query purposes
const queryClient = postgres(runtimeConfig.databaseUrl);
const db = drizzle(queryClient);