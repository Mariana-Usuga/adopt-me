/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Dog from '../components/Dog/Dog';
import NavBar from '../components/NavBar/NavBar';
import NavBarSecondary from '../components/NavBarSecondary/NavBarSecondary';

import { DogProducts } from '../Data/DogProducts';

const LandingPage = () => {
  // const [tasks, setTasks] = useState<DogProducts[]>([]);
  console.log('wor');

  return (
    <>
      <NavBar />
      <NavBarSecondary />
      <Dog products={DogProducts} />
    </>
  );
};

export default LandingPage;
