
import './App.css';
import City from './component/City';
import CityFun from './component/CityFun';
import CounterFun from './component/CounterFun';
import Country from './component/Country';
import CountryFun from './component/CountryFun';
import PropsEx from './component/PropsEx';

function App() {
  return (
    <div>
      {/* <Country/>
      <City/> */}
      <CountryFun/>
      <CityFun/>
      {/* <CounterFun/> */}
      <PropsEx text="hello Vraj"/>
    </div>
  );
}


export default App;
