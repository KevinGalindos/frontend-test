import { Private } from "../routes/Private";
import { Public } from "../routes/Public";
import { useSelector } from 'react-redux'

const App = () => {
  const { authentication } = useSelector(state => state.Auth)

  return (
    <div className="App">
     {authentication? <Private />: <Public />}
    </div>
  );
}

export default App;
