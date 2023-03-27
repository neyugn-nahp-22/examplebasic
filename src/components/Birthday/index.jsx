import classNames from "classnames/bind";
import { useState } from "react";
import Button from "../Button";
import styles from "./Birthday.module.scss";

const cx = classNames.bind(styles);

function Birthday() {
  const profile = [
    {
      avatar: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
      name: "Bertie Yates",
      age: 29,
    },
    {
      avatar: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
      name: "Hester Hogan",
      age: 32,
    },
    {
      avatar: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      name: "Larry Little",
      age: 36,
    },
    {
      avatar: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      name: "Bertie Yates",
      age: 29,
    },
    {
      avatar: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      name: "Bertie Yates",
      age: 29,
    },
  ];
  const [dataSource, setDataSource] = useState(profile);

  const handleClear = () => {
    setDataSource([]);
    console.log(dataSource);
  };

  return (
    <main className={cx("container")}>
      <section className={cx("content")}>
        <h3>{dataSource.length} Birthdays Today</h3>
        {dataSource.map((item, key) => {
          return (
            <section key={key}>
              <article className={cx("person")}>
                <img className={cx("image")} src={item.avatar} alt=""></img>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.age} years</p>
                </div>
              </article>
            </section>
          );
        })}
        <Button onClick={handleClear} className={cx("clear-btn")}>
          Clear All
        </Button>
      </section>
    </main>
  );
}

export default Birthday;
