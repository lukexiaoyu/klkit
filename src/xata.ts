// Generated by Xata Codegen 0.26.6. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "peo",
    columns: [
      { name: "name", type: "string", notNull: true, defaultValue: "姓名" },
      { name: "age", type: "int" },
      { name: "sex", type: "string" },
    ],
  },
  {
    name: "Posts",
    columns: [
      { name: "title", type: "string" },
      { name: "slug", type: "string" },
      { name: "description", type: "text" },
      { name: "pubDate", type: "datetime" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Peo = InferredTypes["peo"];
export type PeoRecord = Peo & XataRecord;

export type Posts = InferredTypes["Posts"];
export type PostsRecord = Posts & XataRecord;

export type DatabaseSchema = {
  peo: PeoRecord;
  Posts: PostsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://lukexiao-s-workspace-j90uf8.us-east-1.xata.sh/db/kl",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
