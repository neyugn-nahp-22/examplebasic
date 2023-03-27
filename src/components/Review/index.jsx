import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Review.module.scss";
import { faAngleLeft, faAngleRight, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Review() {
  const data = [
    {
      id: 1875617,
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      name: "Peter Jones",
      level: "INTERN",
      title:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 12983478192,
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      name: "Bill Anderson",
      level: "THE BOSS",
      title:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
    {
      id: 123987128931,
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      name: "Susan Smith",
      level: "WEB DEVELOPER",
      title:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 12984782293,
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      name: "Anna Johnson",
      level: "WEB DESIGNER",
      title:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
  ];

  const [newPerson, setNewPerSon] = useState(0);

  return (
    <div className={cx("wrapper")}>
      <main>
        {[data[newPerson]].map((item, index) => (
          <article key={index} className={cx("review")}>
            <div className={cx("img-container")}>
              <img className={cx("person-img")} src={item.image} alt="" />
              <span className={cx("quote-icon")}>
                <FontAwesomeIcon icon={faQuoteRight} style={{ fontSize: "1.2rem" }} />
              </span>
            </div>
            <h4 className={cx("author")}>{item.name}</h4>
            <p className={cx("level")}>{item.level}</p>
            <p className={cx("title")}>{item.title}</p>
            <div>
              <button className={cx("prev-btn")}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button className={cx("next-btn")}>
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
            <button className={cx("more-btn")}>Suprise Me</button>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Review;
