import Layout from './Components/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder_Container/BurgerBuilder'

function App() {
  return (
    <div className="App">
      <Layout>
       <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;


/*
class App extends Component {
  render() {
    return (
      <div>
      <Layout>
       <h1>Testing</h1>  
       </Layout>
       </div>
    )
  };
}

export default App;

*/