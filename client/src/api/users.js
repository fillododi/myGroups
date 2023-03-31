import axios from "axios";

const url = '/api/users/'

export const signUp = (user) => axios.post(url, user)