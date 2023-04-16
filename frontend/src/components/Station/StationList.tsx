
import { NavLink } from "react-router-dom";
import Card from "../../shared/layout/Card";
import Station from "../../shared/models/Station";

import "./StationList.css";

const StationList: React.FC<{ stations: Station[] }> = (props) => {
  return (
    <Card>
      <div className="header-line"> 
        <span>Station ID</span>
        <span>Station name</span>
        <span>Address</span>
        <span>City</span>
      </div>
      {props.stations.map((item) => (
        <NavLink key={item.stationId} to={`/stations/${item.stationId}`} className="station-item-line">
          <span>{item.stationId}</span>
          <span className="station-span2">{item.stationName}</span>
          <span>{item.stationAddress}</span>
          <span className="station-span2">{item.city}</span>
        </NavLink>
      ))}
    </Card>
  )
};

export default StationList;
