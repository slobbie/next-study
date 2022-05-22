import classes from './Card.module.css';

interface PropsDataModal {
  children?: React.ReactChild | React.ReactChild[];
}

const Card = (props: PropsDataModal) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
