import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMyIsImlhdCI6MTYzMzIxNjc5NywiZXhwIjoxNjM1ODA4Nzk3fQ.mQYlIxAkKLaAJ_KsYpHjnEar8TNRLGONG7qGesYWy_E";
const api = axios.create({
  baseURL: 'http://192.168.18.6:3000/produtos/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
}, 
});

api.interceptors.request.use(async config => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMyIsImlhdCI6MTYzMzIxNjc5NywiZXhwIjoxNjM1ODA4Nzk3fQ.mQYlIxAkKLaAJ_KsYpHjnEar8TNRLGONG7qGesYWy_E";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;