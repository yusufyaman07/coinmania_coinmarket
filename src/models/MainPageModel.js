import axios from "axios";

//model layer of the homepage
export default class MainPageModel {
  // veiryi alan method
  static async getCoins(page) {
    const options = {
      params: {
        limit: "15",
        offset: (page - 1) * 15, // how many data will be skipped
      },
    };

    try {
      const res = await axios.get("https://api.coincap.io/v2/assets", options);

      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}
