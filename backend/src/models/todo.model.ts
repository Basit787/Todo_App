import { Document, model, Schema } from "mongoose";

export interface ITodo extends Document {
  userId: string;
  title: string;
  description: string;
  dateTime: Date;
  deadline: Date;
  priority: "L" | "M" | "H";
  completed: boolean;
}

const todoSchema = new Schema<ITodo>(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    dateTime: {
      type: Date,
      required: true,
      default: Date.now,
    },
    deadline: {
      type: Date,
      required: true,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    priority: {
      type: String,
      enum: ["L", "M", "H"],
      required: true,
      default: "L",
    },
    completed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = model<ITodo>("todo", todoSchema);
export default Todo;
