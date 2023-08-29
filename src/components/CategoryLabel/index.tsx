import Link from "next/link";
import Label from "../Label";
import { Fragment } from "react";

export default function CategoryLabel({
  categories,
  nomargin = false
}) {
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category: any, index: number) => (
          //   <Link
          //     href={`/category/${category.slug.current}`}
          //     key={index}>
          <Fragment key={index}>
            <Label nomargin={nomargin} color={category.color}>
              {category.title}
            </Label>
          </Fragment>
        ))}
    </div>
  );
}
