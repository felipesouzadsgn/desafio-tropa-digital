import { Card } from "../../components/Card";
import { Sidebar } from "../../components/Sidebar";
import "./styles.scss";

export function Home() {
  const cards = [
    {
      title: "Lorem ipsum dolor sit emet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto rerum sit animi dicta, velit repellendus",
      img: "https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      time: 2,
    },
    {
      title: "Lorem ipsum dolor sit emet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto rerum sit animi dicta, velit repellendus",
      img: "https://images.unsplash.com/photo-1675104180341-4b075869b3bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: 3,
    },
    {
      title: "Lorem ipsum dolor sit emet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto rerum sit animi dicta, velit repellendus",
      img: "https://images.unsplash.com/photo-1675154030630-65c6c17fc103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: 5,
    },
    {
      title: "Lorem ipsum dolor sit emet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto rerum sit animi dicta, velit repellendus",
      img: "https://images.unsplash.com/photo-1675281744865-027cde98bc43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: 2,
    },
    {
      title: "Lorem ipsum dolor sit emet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto rerum sit animi dicta, velit repellendus",
      img: "https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: 3,
    },
    {
      title: "Lorem ipsum dolor sit emet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto rerum sit animi dicta, velit repellendus",
      img: "https://images.unsplash.com/photo-1675285972028-45dc2add07be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: 5,
    },
  ];
  return (
    <main className="main">
      <Sidebar />
      <section className="home">
        <div className="home__container">
          <header>
            <h2>
              Olá <span>Usuário</span>
            </h2>
          </header>
          <div className="home__content">
            {cards.map(({ time, title, img, description }) => (
              <Card
                key={title}
                time={time}
                title={title}
                img={img}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
