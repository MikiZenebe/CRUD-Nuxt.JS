import mongoose from "mongoose";

const bookSchema: mongoose.Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    published: {
      type: Date,
      required: true,
    },
    isbn: String,
    authors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
      },
    ],
    pageCount: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Books", bookSchema);
