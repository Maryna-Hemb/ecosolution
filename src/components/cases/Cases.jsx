import ReactSwipe from "react-swipe";
import { SyntheticEvent, useState, useEffect } from "react";
import cases from "../../data/casesData.json";
import { CasesCard } from "../cases/CasesCard";
import SolarStation from "../../images/cases/solarStation.png";
import ThermalModules from "../../images/cases/thermalModules.png";
import MiniNuclearStation from "../../images/cases/miniNuclearStation.png";
import WindPowe from "../../images/cases/windPowe.png";
import WindTurbines from "../../images/cases/windTurbines.png";

export const Cases = () => {
  const [searchReviews, setSearchReviews] = useState(cases);
  const [disableScroll, setDisableScroll] = useState(Number(1));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let reactSwipeEl;
  useEffect(() => {}, [disableScroll]);

  // SwipeOptions appointment
  const startSlide = 0;
  const swipeOptions = {
    startSlide:
      startSlide < searchReviews.length && startSlide >= 0 ? startSlide : 0,
    auto: 1500,
    speed: 1500,
    disableScroll: false,
    continuous: true,
    callback() {},
    transitionEnd() {
      setWindowWidth(window.innerWidth);
    },
  };
  const hendler = () => {
    console.log("meee");
  };
  console.log(disableScroll);
  return (
    <section>
      <h2>Successful cases of our company</h2>
      <div>
        <div>
          <button type="button" onClick={() => reactSwipeEl.prev()}>
            left
          </button>
          <button type="button" onClick={() => reactSwipeEl.next()}>
            right
          </button>
        </div>
        <ReactSwipe
          ref={(el) => (reactSwipeEl = el)}
          className="mySwipe"
          swipeOptions={swipeOptions}
        >
          {searchReviews.map((item) => (
            <div key={searchReviews.id}>
              <div>
                {item.id === 1 && (
                  <div>
                    <div>
                      01/<span>02</span>
                    </div>
                    <div>
                      <img alt={item.alt} src={`${WindTurbines}`} />
                    </div>
                  </div>
                )}
                {item.id === 2 && (
                  <div>
                    <div>
                      02/<span>03</span>
                    </div>
                    <div>
                      <img alt={item.alt} src={`${SolarStation}`} />
                    </div>
                  </div>
                )}
                {item.id === 3 && (
                  <div>
                    <div>
                      03/<span>04</span>
                    </div>
                    <div>
                      <img alt={item.alt} src={`${ThermalModules}`} />
                    </div>
                  </div>
                )}
                {item.id === 4 && (
                  <div>
                    <div>
                      04/<span>05</span>
                    </div>
                    <div>
                      <img alt={item.alt} src={`${WindPowe}`} />
                    </div>
                  </div>
                )}
                {item.id === 5 && (
                  <div>
                    <div>
                      05/<span>01</span>
                    </div>
                    <div>
                      <img alt={item.alt} src={`${MiniNuclearStation}`} />
                    </div>
                  </div>
                )}
              </div>
              <div>
                {" "}
                <p>{item.address}</p>{" "}
                <button type="button" onClick={() => reactSwipeEl.next()}>
                  arrow
                </button>
              </div>
              <div>
                <p>{item.alt}</p>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </ReactSwipe>
      </div>
    </section>
  );
};
