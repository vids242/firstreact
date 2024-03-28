
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Counter from './containers/Counter/Counter';
import { storeReduce } from './Redux/store';
// import Products from './containers/Products/Products';
// import CounterFun from './containers/Timer/CounterFun';
// import TimerFun from './containers/Timer/TimerFun';
// import Mconstructor from './component/Mconstructor';
// import Doctors from './containers/Doctors/Doctors';
// import Time from './containers/Timer/Time';
// import City from './component/City';
// import CityFun from './component/CityFun';
// import CounterFun from './component/CounterFun';
// import Country from './component/Country';
// import CountryFun from './component/CountryFun';
// import PropsEx from './component/PropsEx';
// import Medicines from './containers/Medicines/Medicines';


function App() { 
  const store = storeReduce()
  return (
    <div>
      {/* <Country/> */}
      {/* <City/> */}
      {/* <CountryFun /> */}
      {/* <CityFun/> */}
      {/* <CounterFun/> */}
      {/* <PropsEx text="hello Vraj"/> */}
      {/* <Medicines/> */}
      {/* <Doctors /> */}
      {/* <Mconstructor/> */}
      {/* <Time/> */}
      {/* <TimerFun/> */}
      {/* <CounterFun/> */}
      {/* <Products/> */}
      <Provider store={store}>
        <Counter />
      </Provider>

    </div>
  );
}


export default App;
