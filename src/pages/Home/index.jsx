import Button from "../../components/Button";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx("wrapper")}>
      <Button className={cx("link-btn")} to="/birthday">
        Birthday
      </Button>
      <Button className={cx("link-btn")} to="/travel">
        Travel
      </Button>
      <Button className={cx("link-btn")} to="/reviews">
        Reviews
      </Button>
    </div>
  );
}

export default HomePage;
