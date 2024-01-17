import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get('/api/users');
}

let getUser = (uid) => {
  return Axios.get('/api/users/'+uid);
}

export const userService = {
  getAllUsers,
  getUser
}
