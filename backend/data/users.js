import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    devices: [],
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    password: bcrypt.hashSync("123456", 10),
    devices: [],
  },
  {
    name: "Maricica",
    email: "maricica@example.com",
    password: bcrypt.hashSync("123456", 10),
    devices: [],
  },
];

export default users;
