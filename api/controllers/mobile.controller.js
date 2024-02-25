import Mobile from "../models/mobile.model.js";

export const test = async (req, res, next) => {
  res.send({ message: "you are here and it is working" });
};

export const getMobile = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.limit) || 100;
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    console.log(req.body);
    const mobiles = await Mobile.find(req.body).skip(startIndex).limit(limit);
    const totalPosts = await Mobile.countDocuments();

    res.status(200).json([
      {
        mobiles,
        totalPosts,
      },
    ]);
  } catch (error) {
    next(error);
  }
};
