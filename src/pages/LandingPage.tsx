/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import NavBar from '../components/NavBar/NavBar';
import NavBarSecondary from '../components/NavBarSecondary/NavBarSecondary';
import ImgHeader from '../components/ImgHeader/ImgHeader';
import Description from '../components/Description/Description';
import Featured from '../components/Featured/Featured';
// import ImgSecondary from '../components/ImgSecondary/ImgSecondary';
import Featured2 from '../components/FeaturedProducts2/Featured2';

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
      <Featured2 />
      {/* <ImgSecondary /> */}
      {/* <Featured />  */}
    </>
  );
};

export default LandingPage;
