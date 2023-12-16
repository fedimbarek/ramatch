import CardList from './CardList'
import { friends } from './friends';
function App() {
  return (
    <div className='tc bg-yellow pa2'>   
      <h1>Crasy Human</h1>
   <CardList friends={friends}/>
    </div>
  );
}

export default App;
