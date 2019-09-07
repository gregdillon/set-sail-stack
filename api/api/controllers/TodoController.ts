import * as express from "express";

export function get(req: express.Request, res: express.Response, next: Function): express.Response {
  return res.status(200).send('Hello from Typescript Sails!');
};