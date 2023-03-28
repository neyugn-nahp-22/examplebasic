import Button from "../../components/Button";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import { linkButton } from "../../routes/button";

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <section className={cx("wrapper")}>
      <div className={cx("title")}>
        <h2>My Projects</h2>
        <div className={cx("title-underline")}></div>
      </div>
      <div className={cx("section-center")}>
        {linkButton.map((btn, index) => {
          return (
            <Button key={index} className={cx("link-btn")} to={btn.link}>
              <div className={cx("img-container")}>
                <span className={cx("img-content")}>
                  <img className={cx("image")} src={btn.image} alt="" />
                </span>
              </div>
              <footer>
                <h5>{btn.title}</h5>
              </footer>
            </Button>
          );
        })}
      </div>
    </section>
  );
}

export default HomePage;
