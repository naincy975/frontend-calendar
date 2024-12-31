import './App.css'
import { SpecialVrata } from './SpecialVrata'
export const App = () => {

  return (
    <>
      <h1 className="text-center my-4">Jiva Calendar</h1>
      <button className='btn btn-primary'>Get all special vrata</button>
      <SpecialVrata />
    </>
  )
}

export default App
