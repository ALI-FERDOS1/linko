import { Axios } from "./request";

export function getCourse(id) {
  return Axios.get(`course_api/${id}`).then(({ data }) => data);

}

export function getLearn(id) {
  return Axios.get(`level_api/${id}`).then(({ data }) => data);

}

