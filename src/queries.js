const Pool = require('pg').Pool;
const db = new Pool({
   user: 'postgres',
   host: 'localhost',
   database: 'hickathon',
   password: '',
   port: 5432,
});

/** USERS CRUD */
const getUsers = (request, response) => {
   db.query('SELECT * FROM users ORDER BY name ASC', (error, results) => {
      if (error) {
         throw error;
      }
      response.status(200).json(results.rows);
   });
};
const getUserById = (request, response) => {
   const id = parseInt(request.params.id);
   db.query('SELECT * FROM users WHERE id = $1', (error, results) => {
      if (error) {
         throw error;
      }
      response.status(200).json(results.rows);
   });
};
const createUser = (request, response) => {
   const { name, lastname, email, role, phone, password } = request.body;
   db.query(
      'INSERT INTO users (name, lastname, email, role, phone, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, lastname, email, role, phone, password],
      (error, results) => {
         if (error) {
            throw error;
         }
         response.status(201).send('User added with ID: ${results.rows[0].id}');
      }
   );
};
const updateUser = (request, response) => {
   const id = parseInt(request.params.id);
   const { name, lastname, email, role, phone, password } = request.body;
   db.query(
      'UPDATE users SET name = $1, lastname = $2, email = $3, role = $4, phone = $5, password = $6 WHERE id = $7',
      [name, lastname, email, role, phone, password, id],
      (error, results) => {
         if (error) {
            throw error;
         }
         response.status(200).send('User modified with ID: ${id}');
      }
   );
};
const deleteUser = (request, response) => {
   const id = parseInt(request.params.id);
   db.query(
      'DELETE FROM users WHERE id = $1',
      [id],
      (error, results) => {
         if (error) {
            throw error;
         }
         response.status(200).send('User deleted with ID: ${id}');
      }
   );
};

/** ABSENCES CRUD */
const getAbsences = (request, response) => {
   db.query('SELECT * FROM absences ORDER BY date_registered', (error, results) => {
      if (error) {
         throw error;
      }
      response.status(200).json(results.rows);
   });
};
const getAbsenceById = (request, response) => {
   const id = parseInt(request.params.id);
   db.query('SELECT * FROM absences WHERE id = $1', (error, results) => {
      if (error) {
         throw error;
      }
      response.status(200).json(results.rows);
   });
};
const getAbsencesByUserId = (request, response) => {
   const id = parseInt(request.params.id);
   db.query('SELECT * FROM absences WHERE user_id = $1', (error, results) => {
      if (error) {
         throw error;
      }
      response.status(200).json(results.rows);
   });
}; User
const createAbsence = (request, response) => {
   const { user_id, start_date, finish_date, request_msg, title } = request.body;
   db.query(
      'INSERT INTO absences (user_id, start_date, finish_date, request_msg, title) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user_id, start_date, finish_date, request_msg, title],
      (error, results) => {
         if (error) {
            throw error;
         }
         response.status(201).send('Absence added with ID: ${results.rows[0].id}');
      }
   );
};
const updateAbsence = (request, response) => {
   const id = parseInt(request.params.id);
   const { user_id, start_date, finish_date, request_msg, title } = request.body;
   db.query(
      'UPDATE absences SET user_id = $1, start_date = $2, finish_date = $3, request_msg = $4, title = $5 WHERE id = $6',
      [user_id, start_date, finish_date, request_msg, title, id],
      (error, results) => {
         if (error) {
            throw error;
         }
         response.status(200).send('Absence modified with ID: ${id}');
      }
   );
};
const moderateAbsence = (request, response) => {
   const id = parseInt(request.params.id);
   const { status, response_msg } = request.body;
   db.query(
      'UPDATE absences SET status = $1, response_msg = $2 WHERE id = $3',
      [status, response_msg, id],
      (error, results) => {
         if (error) {
            throw error;
         }
         response.status(200).send('Absence moderated with ID: ${id}');
      }
   );
};
const deleteAbsence = (request, response) => {
   const id = parseInt(request.params.id);
   db.query(
      'DELETE FROM absences WHERE id = $1',
      [id],
      (error, results) => {
         if (error) {
            throw error;
         }
         response.status(200).send('Absence deleted with ID: ${id}');
      }
   );
};

module.exports = {
   getUsers,
   getUserById,
   createUser,
   updateUser,
   deleteUser,
   getAbsences,
   getAbsenceById,
   getAbsencesByUserId,
   createAbsence,
   updateAbsence,
   moderateAbsence,
   deleteAbsence,
};