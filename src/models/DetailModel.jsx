import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

export default class DetailModel {
  constructor(coin) {
    this.coin = coin;

    // prepare the data of the boxes to be printed on the screen
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Volume",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Supply",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Price",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24h Change (%)",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24 Hacim",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];

    //convert price history to the format desired by the
    // chart library
    this.chartData = {
      labels: coin?.history.map(i => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: "Price",

          data: coin?.history.map(i => i.priceUsd),
        },
      ],
    };
  }

  //gets both detail and price history from api
  static async getCoin(id) {
    //get detail data
    const detailRes = await axios.get(`https://api.coincap.io/v2/assets/${id}`);

    //get price history
    const historyRes = await axios.get(
      `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
    );

    // return the data to where the function was called
    return {
      detail: detailRes.data.data,
      history: historyRes.data.data,
    };
  }
}
