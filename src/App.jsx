import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import HelmetCard from './components/HelmetCard';
import { useState } from 'react';


function App() {
  const loadedHelmets = useLoaderData();
  const [helmets, setHelmets] = useState(loadedHelmets)
  return (
    <div className='w-[1320px] mx-auto'>
      <h1 className='text-center text-6xl my-10'>{helmets.length}</h1>
      <p className='text-center'>Go to Add Helmet <Link className='underline text-blue-600' to="/addhelmet">page</Link></p>
      <div className='grid md:grid-cols-3 gap-4'>
        {
          helmets.map(helmet => <HelmetCard
            key={helmet._id}
            helmet={helmet}
            setHelmets={setHelmets}
            helmets={helmets}
          ></HelmetCard>)
        }
      </div>
    </div>
  )
}

export default App
