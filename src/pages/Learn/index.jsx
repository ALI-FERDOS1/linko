import {
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import "./Learn.scss";
import { getLearn } from "../../api";

function Learn() {
  const [learn, setLearn] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { level } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getLearn(level)
      .then((data) => {
        setLearn(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
      });
  }, []);
  console.log(learn);

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div className="root_learn">
      <div className="description">
        <h2>{learn.title === undefined ? "" : learn.title}</h2>
        <p>{learn.text === undefined ? "" : learn.text}</p>
      </div>
      <div className="learn_items">
        <div className="exercise">
          <h2>
            تمرین
            {/* {learn.exercise.title === undefined ? "" : learn.exercise.title} */}
          </h2>
          تمرین ها را از لینک های زیر دانلود کنید
          <a href="#">تمرین اول</a>
          <a href="#">تمرین دوم</a>
        </div>
        <div className="question">
          <h2> پرسش ها </h2>
          <span>پایتون  چیست؟</span>
          <input type="text" placeholder="پاسخ"/>
          <button>ارسال پاسخ</button>
        </div>
      </div>
    </div>
  );
}
export default Learn;
