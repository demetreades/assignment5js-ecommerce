const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin User',
    email: 'admin@user.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kokos Sanel',
    email: 'kokos@sanel.gr',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'kokozanel',
    email: 'kokoz@zanel.za',
    password: bcrypt.hashSync('121212', 10),
  },
  {
    name: 'Coco Leva',
    email: 'coco@leva.bg',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Tsoni Mnemonic',
    email: 'tsoni@mnemonic.ru',
    password: bcrypt.hashSync('123456', 10),
  },
];

module.exports = users;
