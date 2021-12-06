import { Li, Char } from "./style";
import { useState, useEffect } from "react";

const HeroList = () => {
  const [comicState, setComics] = useState([]);
  useEffect(() => {
    fetch(
      "http://gateway.marvel.com/v1/public/characters?ts=1638557267463&apikey=2c1b954463477c116f79101c725fd280&hash=be6691147db5103c412b52cf734db545"
    )
      .then((res) => res.json())
      .then((res) => {
        setComics(res.data.results);
      });
  }, []);

  return (
    <div>
      <Li>
        {comicState.map((comic) => {
          return (
            <ul key={comic.id}>
              <Char>
                <div>
                  <h3>{comic.name}</h3>

                  <img
                    alt="comic"
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  ></img>
                </div>
              </Char>
            </ul>
          );
        })}
      </Li>
    </div>
  );
};

export default HeroList;
