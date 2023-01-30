import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { GreetingBox } from 'components/GreetingBox/GreetingBox';
import { HomeView } from 'components/HomeView/HomeViev';
export default function Home() {
  const isLoggedIn  = useSelector(selectIsLoggedIn)
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
          { !isLoggedIn ? (<GreetingBox/>) : (<HomeView/>)} 
   
    </div>
  );
}
