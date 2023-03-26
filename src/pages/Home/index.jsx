import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx("wrapper")}>
      <div>
        <NavLink className={cx("link")} style={{ marginRight: "20px" }} to="/birthday">
          Birthday
        </NavLink>
      </div>
      <div>
        <NavLink className={cx("link")} style={{ marginRight: "20px" }} to="/travel">
          Travel
        </NavLink>
      </div>
      <div>
        <NavLink className={cx("link")} to="/reviews">
          Reviews
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
