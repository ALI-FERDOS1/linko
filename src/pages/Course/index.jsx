import {
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { getCourse } from "../../api";
import { CircularProgress } from "@mui/material";
import "./Course.scss";

function Course() {
  const { number } = useParams();

  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCourse(number)
      .then((data) => {
        setCourse(data.levels);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
      });
  }, []);
  console.log(course);

  return (
    <div className="course_root">
      <div className="levels">
        {isLoading ? (
          <CircularProgress />
        ) : (
          course.map((item) => (
            <Link
              key={item.id}
              to={`/courses/${number}/${item.id}`}
              className="link"
            >
              <div className="link_item">
                {item.title === undefined ? "" : item.title}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Course;
