import { ReactNode } from "react";
import classes from "./Card.module.scss";
import Text from "../Text";
import clsx from "clsx";

type Props = {
  icon?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

const Card = ({ description, icon, title, className }: Props) => {
  return (
    <div className={clsx(classes.container, className)}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <div className={classes.contents}>
        <Text htmlTag="h5" value={title} fontSize="xxs" />
        <Text value={description} fontSize="sm" color="secondary" />
      </div>
    </div>
  );
};

export default Card;
