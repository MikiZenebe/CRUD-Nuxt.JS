import BookModel from "~/server/db/models/Book.model";

export default defineEventHandler(async (e: any) => {
  const id = e.context.params.id;

  //Remove book
  try {
    await BookModel.findByIdAndDelete(id);
    return { message: "Book removed" };
  } catch (error: any) {
    throw createError({
      message: error.message,
    });
  }
});
