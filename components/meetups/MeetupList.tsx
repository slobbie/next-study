import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

interface MeetupDataModal {
  id: number;
  image: string;
  title: string;
  address: string;
}

interface PropsDataModal {
  meetups: MeetupDataModal[];
}

const MeetupList = (props: PropsDataModal) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
