/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import NavBar from '../components/NavBar/NavBar';
import NavBarSecondary from '../components/NavBarSecondary/NavBarSecondary';

const LandingPage = () => {
  // const [tasks, setTasks] = useState<DogProducts[]>([]);
  console.log('wor');

  return (
    <>
      <NavBar />
      <NavBarSecondary />
      <div>
        <div style={{
          position: 'relative',
          textAlign: 'center',
          margin: '0 auto',
          width: '70%',
        }}
        >
          <ul>
            <li>ñññe</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
