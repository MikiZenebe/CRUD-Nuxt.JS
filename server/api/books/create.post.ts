import BookModel from "~/server/db/models/Book.model";
import { BookSchema } from "~/server/validation";

export default defineEventHandler(async (e) => {
  //Get data from body
  const body = await useBody(e);

  //validate
  let { error } = BookSchema.validate(body);
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false,
    });
  }

  //create book
  try {
    await BookModel.create(body);
    return { message: "Book Created" };
  } catch (e) {
    throw createError({
      message: e.message,
    });
  }
});
