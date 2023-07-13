import express, { Express, Request, Response } from "express";
import MySQL from "../Models/db";

type AddUserType = {
  id: number;
  name: string;
};

const getUser = (req: Request, res: Response) => {
  const query =
    "SELECT * FROM user WHERE `id`='" + parseInt(req.params.id) + "'";

  MySQL.query(query, (err: Error, results: Object[]) => {
    if (err) {
      res.status(500).json({
        statuCode: 500,
        err,
      });
    } else {
      if (results.length == 0) {
        res.status(404).json({
          statuCode: 404,
          data: `No records found for id ${parseInt(req.params.id)}`,
        });
      }
      res.json({
        data: results,
      });
    }
  });
};

const addUser = (req: Request, res: Response) => {
  const requestBody: AddUserType = req.body;

  const query =
    "INSERT INTO `user`(`id`, `name`) VALUES" +
    "('" +
    requestBody.id +
    "'," +
    "'" +
    requestBody.name +
    "')";

  MySQL.query(query, (err: Error, results: Object[]) => {
    if (err) {
      res.status(500).json({
        statuCode: 500,
        err,
      });
    } else {
      res.json({
        data: "User successfully insrted",
      });
    }
  });
};

module.exports = {
  getUser,
  addUser,
};
