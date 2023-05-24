import { Client, Graphql, Account, Databases, Functions } from "appwrite";

export const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')
    .setEndpointRealtime('cloud.appwrite.io')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const graphql = new Graphql(client);
export const account = new Account(client);
export const databases = new Databases(client);
export const functions = new Functions(client);
