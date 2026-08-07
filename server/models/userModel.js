// const db = require('../config/db');

// function findByUsername(username) {
//     return new Promise((resolve, reject) => {
//         db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
//             if (err) reject(err);
//             else resolve(row);
//         });
//     });
// }

// function findByPhone(phone) {
//     return new Promise((resolve, reject) => {
//         db.get('SELECT * FROM users WHERE phone = ?', [phone], (err, row) => {
//             if (err) reject(err);
//             else resolve(row);
//         });
//     });
// }

// function createUser(user) {
//     return new Promise((resolve, reject) => {
//         const query = `
//             INSERT INTO users (username, password, phone, invite_code)
//             VALUES (?, ?, ?, ?)
//         `;

//         db.run(query, [
//             user.username,
//             user.password,
//             user.phone,
//             user.inviteCode || null
//         ], function (err) {
//             if (err) reject(err);
//             else resolve(this.lastID);
//         });
//     });
// }

// module.exports = {
//     findByUsername,
//     findByPhone,
//     createUser
// };
const db = require("../config/db");

// پیدا کردن کاربر با نام کاربری
function findUserByUsername(username) {
    return new Promise((resolve, reject) => {

        db.get(
            "SELECT * FROM users WHERE username = ?",
            [username],
            (err, row) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }

            }
        );

    });
}

// پیدا کردن کاربر با شماره موبایل
function findUserByPhone(phone) {
    return new Promise((resolve, reject) => {

        db.get(
            "SELECT * FROM users WHERE phone = ?",
            [phone],
            (err, row) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }

            }
        );

    });
}

// ثبت کاربر
function createUser(user) {

    return new Promise((resolve, reject) => {

        const sql = `
        INSERT INTO users
        (
            username,
            password,
            phone,
            invite_code
        )
        VALUES
        (
            ?, ?, ?, ?
        )
        `;

        db.run(
            sql,
            [
                user.username,
                user.password,
                user.phone,
                user.inviteCode
            ],
            function (err) {

                if (err) {

                    reject(err);

                } else {

                    resolve({
                        id: this.lastID
                    });

                }

            }
        );

    });

}

// گرفتن اطلاعات کاربر
function getUserById(id) {

    return new Promise((resolve, reject) => {

        db.get(

            "SELECT * FROM users WHERE id = ?",

            [id],

            (err, row) => {

                if (err) {

                    reject(err);

                } else {

                    resolve(row);

                }

            }

        );

    });

}

module.exports = {

    createUser,

    findUserByUsername,

    findUserByPhone,

    getUserById

};