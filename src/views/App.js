import { Private } from "../routes/Private";
import { Public } from "../routes/Public";

const App = () => {
  const auth = false

  return (
    <div className="App">
     {auth? <Private />: <Public />}
    </div>
  );
}

export default App;
