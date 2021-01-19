import logo from './logo.svg';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import PortalDemo from './component/PortalDemo'

function App() {
  return (
    <div className="App">
      {/* <UserProvider  value="Fitri">
        <ComponentC />
      </UserProvider>  */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Fitri' : 'Guest'}/> */}
      {/* <Counter
					render={(count, incrementCount) =>
					<ClickCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</ClickCounterTwo>}>
				</Counter>
      <Counter
					render={(count, incrementCount) =>
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>}>
				</Counter>   */}
        <RefsDemo />
        <FocusInput />
        <PortalDemo />


    </div>
  );
}

export default App;
