import mysql from "mysql";

const mysqlConnection = () => {
  return new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "ROOT",
      database: "bangkitmart",
    });

    connection.connect((err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(connection);
    });
  });
};
