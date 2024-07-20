import BookModel from "~/server/db/models/Book.model";
import { BookSchema } from "~/server/validation";

export default defineEventHandler(async (e: any) => {
  const body = await useBody(e);

  //get id from params
  const id = e.context.params.id;

  //validate
  let { error } = BookSchema.validate(body, {
    abortEarly: true,
    allowUnknown: true,
  });
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false,
    });
  }

  //update book
  try {
    await BookModel.findByIdAndUpdate(id, body);
    return { message: "Author updated" };
  } catch (error: any) {
    throw createError({
      message: error.message,
    });
  }
});
