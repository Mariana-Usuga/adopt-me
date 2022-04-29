/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import NavBar from '../components/NavBar/NavBar';
import NavBarSecondary from '../components/NavBarSecondary/NavBarSecondary';
import ImgHeader from '../components/ImgHeader/ImgHeader';

const LandingPage = () => {
  // const [tasks, setTasks] = useState<DogProducts[]>([]);
  console.log('wor');

  return (
    <>
      <NavBar />
      <NavBarSecondary />
      <ImgHeader />
    </>
  );
};

export default LandingPage;
