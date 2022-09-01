import City from "../models /citiesModel.js";

const getAllCities = async (req, res) => {
  try {
    const allCities = await City.find({})
      .populate({
        path: "museums",
        select: ["name", "price"],
      })
      .exec();

    console.log("allcities", allCities);
    res.status(200).json({
      allCities,
      number: allCities.length,
    });
  } catch (error) {
    if (error === "xyz") {
      res.status(502).json({
        error: error,
        msg: "wrong url",
      });
    }
    res.status(501).json({
      error: error,
      msg: "server failed",
    });
  }
};
const getCitiesByCountryCode = async (req, res) => {
  // console.log("req :>> ", req.params.countryCode);
  console.log("req.params :>> ", req.params.countryCode);
  console.log("req.query :>> ", req.query);
  const { likes } = req.query;
  if (likes) {
    try {
      const requestedCities = await City.find({
        countryCode: req.params.countryCode,
        likes: { $gte: likes },
      }).exec();
      if (requestedCities.length === 0) {
        res.status(201).json({
          msg: "no cities with this amount of likes or country code",
        });
      } else {
        res.status(200).json({
          requestedCities,
          number: requestedCities.length,
        });
      }

      // console.log("requestedCities", requestedCities);
    } catch (error) {
      console.log("error :>> ", error);
      res.status(501).json({
        error: error,
        msg: "server failed",
      });
    }
  } else {
    try {
      console.log("req.params.countryCode 222", req.params.countryCode);
      const requestedCities = await City.find({
        countryCode: req.params.countryCode,
      }).exec();
      console.log("requested cities___", requestedCities);
      if (requestedCities.length === 0) {
        res.status(201).json({
          msg: "no cities with this country code",
        });
      } else {
        res.status(200).json({
          requestedCities,
          number: requestedCities.length,
        });
      }

      // console.log("requestedCities", requestedCities);
    } catch (error) {
      console.log("error :>> ", error);
      res.status(501).json({
        error: error,
        msg: "server failed",
      });
    }
  }
};
export { getAllCities, getCitiesByCountryCode };
