import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          {" "}
          Delicious meals, created{" "}
          <span className={classes.highlight}> by you</span>
        </h1>
        <div>
          <div className={classes.cta}>
            <Link href="/meals/share">Share Your Favorite Recipe</Link>
          </div>
        </div>
      </header>
      <main>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
