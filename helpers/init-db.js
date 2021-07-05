import faunadb from "faunadb";

export const q = faunadb.query;

export let client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});