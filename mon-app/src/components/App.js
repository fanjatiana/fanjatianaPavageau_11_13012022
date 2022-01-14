import Header from './Header'
import Banner from './Banner'
import Main from './Main';
import Footer from './Footer';
import '../styles/App.css';
import react,{ useEffect }  from 'react';


const App = () => {
  useEffect(() =>{
    fetch("../../public/data.json"
    ).then((response)=>{
      if(response.ok){
        return response.json();
      }
    }).then(data =>{
      console.log(data)
    })
  }
  )
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  )
  
}

export default App;
