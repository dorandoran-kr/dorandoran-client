import axios from 'axios';

export default axios.create({
  baseURL: 'https://doran.yummeal.ai',
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGhvbmVOdW1iZXIiOiIwMTAyODE1NDI4NCIsImlhdCI6MTYzMTE2NTk2MSwiZXhwIjoxNjMxMjUyMzYxfQ.aoO3W3EquUiJIxpWKpO5hyy8SHorB7P5j2nzsQjPGwc"
  }
})