/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import NavBar from '../components/NavBar/NavBar';
import NavBarSecondary from '../components/NavBarSecondary/NavBarSecondary';
import ImgHeader from '../components/ImgHeader/ImgHeader';
import Description from '../components/Description/Description';
import Featured from '../components/Featured/Featured';

const LandingPage = () => {
  // const [tasks, setTasks] = useState<DogProducts[]>([]);
  console.log('wor');

  return (
    <>
      <NavBar />
      <NavBarSecondary />
      <ImgHeader />
      <Description />
      <Featured />
    </>
  );
};

export default LandingPage;
