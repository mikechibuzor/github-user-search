import axios from "axios";

export const searchUser = async (searchValue) => {
  return axios.get(`https://api.github.com/users/${searchValue}`);
};
