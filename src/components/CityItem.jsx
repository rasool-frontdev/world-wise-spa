import { Link } from "react-router-dom";
import style from "./CityItem.module.css";
import { useCities } from "../context/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();

  function handleClick(e) {
    e.preventDefault();
    deleteCity(city.id);
  }
  return (
    <li>
      <Link
        className={`${style.cityItem} ${
          city.id === currentCity.id ? style["cityItem--active"] : ""
        }`}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}>
        <span className={style.emoji}>{city.emoji}</span>
        <h3 className={style.name}>{city.cityName}</h3>
        <time className={style.date}>{formatDate(city.date)}</time>
        <button className={style.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
