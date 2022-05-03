/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import NavBar from '../components/NavBar/NavBar';
import NavBarSecondary from '../components/NavBarSecondary/NavBarSecondary';
import ImgHeader from '../components/ImgHeader/ImgHeader';
import Description from '../components/Description/Description';

const LandingPage = () => {
  // const [tasks, setTasks] = useState<DogProducts[]>([]);
  console.log('wor');

  return (
    <>
      <NavBar />
      <NavBarSecondary />
      <ImgHeader />
      <Description />
    </>
  );
};

export default LandingPage;
