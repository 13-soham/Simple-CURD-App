import NavBar from '../components/NavBar';
import NotePage from '../pages/NotePage';

const App = () => {
  return (
    <div className='min-h-screen w-full px-3 py-2'>
      <NavBar/>
      <NotePage/>
    </div>
  )
}

export default App;