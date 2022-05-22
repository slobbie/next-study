import type { NextPage } from 'next';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 1,
    title: '첫번째 모임',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/Seoul_montage.PNG',
    address: '서울 어딘가',
    description: '첫번째모임',
  },
  {
    id: 2,
    title: '두번째 모임',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/Seoul_montage.PNG',
    address: '서울 어딘가',
    description: '두번째모임',
  },
];

const HomePage: NextPage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
