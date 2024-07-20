import BookModel from "~/server/db/models/Book.model";

export default defineEventHandler(async (e) => {
  return await BookModel.find().populate("authors");
});
