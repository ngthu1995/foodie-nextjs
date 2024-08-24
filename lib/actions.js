"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const { title, image, summary, slug, instructions, name, email } = formData;
  const meal = {
    title,
    image,
    summary,
    slug,
    instructions,
    creator: name,
    creator_email: email,
  };

  await saveMeal(meal);

  redirect("/meals");
}
