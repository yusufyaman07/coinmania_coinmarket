import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import Model from "../models/DetailModel";

const DetailController = () => {
  const [coin, setCoin] = useState(null);

  //1) get id from url
  const { id } = useParams();

  //2) get coin's detail data and price history
  useEffect(() => {
    Model.getCoin(id).then(res => setCoin(res));
  }, []);

  const model = new Model(coin);

  return <DetailView model={model} />;
};

export default DetailController;
