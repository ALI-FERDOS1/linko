import landing from "../../assets/images/landing.png";
import "./Main.scss";
import email from "../../assets/images/email.jpg";
import path from "../../assets/images/category/path.png";
import exams from "../../assets/images/category/exams.png";
import books from "../../assets/images/category/books.png";
import time from "../../assets/images/category/time.png";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { getCourses } from "../../api";
import { Link } from "react-router-dom";

function Main() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCourses()
      .then((data) => {
        setCourses(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
      });
  }, []);

  console.log(courses);

  return (
    <div className="root">
      <div className="landing">
        <div className="landing_part">
          <h1>دوره های برنامه نویسی و کامپیوتر لینکو</h1>
          <img className="landing_img" src={landing}></img>
          <h3>اسـتـفـاده از دسـتـورات لـیـنـوکـس در پـایـتـون</h3>
          <p>
            هنگام استفاده از خط فرمان سیستم عامل لینوکس، در واقع از ابزاریهای
            پیاده سازی شدهای استفاده می کنید که ایجاد تغیرات را هموارتر می کند.
            استفاده از دستورات لینوکس در زبان پایتون، میتواند علاوهبر افزایش
            سرعت اجرا، خوانایی برنامه را نیز افزایش دهد.
          </p>
        </div>
        <div className="email">
          <h3>_سری ایمیل های رایگان_</h3>
          <img src={email} className="email_img"></img>
          <input type="email" placeholder="ایمیل" className="email_input" />
          <button className="email_button">دریافت خبرنامه</button>
          <span>.میتوانید در هر زمان لغو اشتراک کنید</span>
        </div>
      </div>

      <div className="category">
        <h3>دسته بندی</h3>
        <div className="category_type">
          <button style={{ backgroundImage: `url(${path})` }} />
          <button style={{ backgroundImage: `url(${exams})` }} />
          <button style={{ backgroundImage: `url(${books})` }} />
          <button style={{ backgroundImage: `url(${time})` }} />
        </div>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="جستجو در دوره ها ، مسیر یادگیری ، آزمون ها ، کتاب ها ..."
        />
        <button>جستجو</button>
      </div>

      <div className="courses">
        <h2>دوره های آموزشی</h2>
        <div className="course_items">
          {isLoading ? (
            <CircularProgress size={100}/>
          ) : (
            courses.map((item, index) => (
              <Link key={item.id} to={`/courses/${item.id}`} className="link">
                <div className="course_item">
                  <img src={item.picture === undefined ? "" : item.picture} />
                  <h3>
                    {item.title === undefined ? "" : item.title} دوره از صفر تا
                    صد
                  </h3>
                  <p>
                    {item.description === undefined ? "" : item.description}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
