import Label from "../Label";
import { Fragment } from "react";

interface IProps {
  categories?: any,
  nomargin?: any
}

export default function CategoryLabel({
  categories = [],
  nomargin = false
}: IProps) {
  return (
    <div className="flex gap-3">
      {categories.length &&
        categories.slice(0).map((category: any, index: number) => (
          <Fragment key={index}>
            <Label nomargin={nomargin} color={category.color}>
              {category.title}
            </Label>
          </Fragment>
        ))}
    </div>
  );
}
