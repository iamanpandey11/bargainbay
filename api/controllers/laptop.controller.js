import Laptop from "../models/laptop.model.js";
export const test = async (req, res, next) => {
  res.send({ message: "you are here and it is working" });
};
export const create = async (req, res, next) => {
  const {
    name,
    brand,
    price,
    screen_size,
    processor,
    ram,
    storage,
    battery_life,
    gpu,
    color,
    release_date,
  } = req.body;

  const newPost = new Laptop({
    ...req.body,
  });
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
  //   if (!req.user.isAdmin) {
  //     return next(errorHandler(403, "You are not allowed to create a post"));
  //   }
  //   if (!req.body.title || !req.body.content) {
  //     return next(errorHandler(400, "Please provide all required fields"));
  //   }
  //   const slug = req.body.title
  //     .split(" ")
  //     .join("-")
  //     .toLowerCase()
  //     .replace(/[^a-zA-Z0-9-]/g, "");
  //   const newPost = new Post({
  //     ...req.body,
  //     slug,
  //     userId: req.user.id,
  //   });
  //   try {
  //     const savedPost = await newPost.save();
  //     res.status(201).json(savedPost);
  //   } catch (error) {
  //     next(error);
  //   }
};
