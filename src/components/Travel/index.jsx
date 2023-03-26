import classNames from "classnames/bind";
import { useState } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import styles from "./Travel.module.scss";

const cx = classNames.bind(styles);

function Travel() {
  const data = [
    {
      id: 1,
      title: "Best Of Paris In 7 Days Tour",
      des: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image: "https://images2.imgbox.com/d6/91/DLtwCiTn_o.jpg",
      price: "$1,995",
    },
    {
      id: 2,
      title: "Best Of Ireland In 14 Days Tour",
      des: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
      image: "https://images2.imgbox.com/e5/62/SR8sJgyg_o.jpeg",
      price: "$3,895",
    },
    {
      id: 3,
      title: "Best Of Salzburg & Vienna In 8 Days Tour",
      des: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image: "https://images2.imgbox.com/a2/b3/5H5WRLw7_o.jpeg",
      price: "$1,995",
    },
    {
      id: 4,
      title: "Best Of Rome In 7 Days Tour",
      des: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image: "https://images2.imgbox.com/67/2f/Sk5x6VxF_o.jpeg",
      price: "$1,995",
    },
    {
      id: 5,
      title: "Best Of Poland In 10 Days Tour",
      des: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image: "https://images2.imgbox.com/ff/f5/vFKUUGBY_o.jpeg",
      price: "$1,995",
    },
  ];

  const [dataSource, setDataSource] = useState(data);

  const handleDelete = (id) => {
    const newArray = dataSource.filter((item) => item?.id !== id);
    setDataSource(newArray);
  };

  const handleRefresh = () => {
    setDataSource(data);
  };

  return (
    <main className={cx("wrapper")}>
      {dataSource.length > 0 ? (
        <section>
          <div className={cx("title")}>
            <h2>our tours</h2>
            <div className={cx("title-underline")}></div>
          </div>
          <div className={cx("tours")}>
            {dataSource.map((item, key) => {
              return (
                <article key={key} className={cx("single-tour")}>
                  <img className={cx("img")} src={item.image} alt="" />
                  <span className={cx("tour-price")}>{item.price}</span>
                  <div className={cx("tour-info")}>
                    <h5>{item.title}</h5>
                    <p>
                      <ReactReadMoreReadLess
                        charLimit={200}
                        readMoreText={"Read More"}
                        readLessText={"Show Less"}
                        readMoreStyle={{
                          fontWeight: 600,
                          cursor: "pointer",
                          color: "var(--primary-500)",
                        }}
                        readLessStyle={{
                          fontWeight: 600,
                          cursor: "pointer",
                          color: "var(--primary-500)",
                        }}
                      >
                        {item.des}
                      </ReactReadMoreReadLess>
                    </p>
                    <button className={cx("more-btn")} onClick={() => handleDelete(item.id)}>
                      Not Interested
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ) : (
        <div className={cx("title")}>
          <h2>no tours left</h2>
          <button
            onClick={handleRefresh}
            style={{ marginTop: "2rem" }}
            className={cx("refresh-btn")}
          >
            Refresh
          </button>
        </div>
      )}
    </main>
  );
}

export default Travel;
