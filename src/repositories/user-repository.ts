import mysql from "mysql2";
import { UserModel } from "../models/user-model";

export class UserRepository {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  create(userModel: UserModel) {
    return new Promise<number>((resolve, reject) => {
      const q = `INSERT INTO users (email, password, name, address, balance) VALUES ('${userModel.email}', '${userModel.password}', '${userModel.name}',"",0)`;
      this.db.query(q, (err: mysql.QueryError | null, rows: mysql.OkPacket) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(rows.insertId);
      });
    });
  }

  getByEmail(email: string) {
    return new Promise<UserModel>((resolve, reject) => {
      const q = `SELECT * FROM users WHERE email = '${email}'`;

      this.db.query(
        q,
        (err: mysql.QueryError | null, rows: mysql.RowDataPacket[]) => {
          if (err) {
            reject(err);
            return;
          }
          if (rows.length === 0) {
            reject(new Error("user not found"));
            return;
          }
          resolve({
            id: rows[0].id,
            email: rows[0].email,
            password: rows[0].password,
            name: rows[0].name,
            balance: rows[0].balance,
            address: rows[0].address,
          });
        }
      );
    });
  }
}
