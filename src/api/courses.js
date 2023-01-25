import { Axios } from "./request";

export function getCourses() {
    return Axios.get('course_api/').then(({ data }) => data);
  }