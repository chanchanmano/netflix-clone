import './App.css';
import Row from './components/Row'
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">
      
      <Nav />
      <Banner />
      
      
      {/* Rows*/}
       {requests.map((obj,index)=>{
         if(index>0){
          
          return <Row key={index} title={obj.title} fetchUrl={obj.fetchRelevant} />
         }else{
          return <Row key={index} title={obj.title} fetchUrl={obj.fetchRelevant} isLargerRow />
         }

         })}
    </div>
  );
}

export default App;
