import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Harry Potter',
    email: 'harry@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Dorthy Smith',
    email: 'dorthy@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
