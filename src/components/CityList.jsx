import { useCities } from "../context/CitiesContext";
import CityItem from "./CityItem";
import style from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

const CityList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message
        message={"Add your firts city by clicking on a city on the map"}
      />
    );

  return (
    <ul className={style.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
