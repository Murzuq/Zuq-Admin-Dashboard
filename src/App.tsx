import Header from './components/Layout/Header'
import Sidebar from './components/Layout/Sidebar'

function App() {
  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 transition-all duration-500 dark:from-slate-800 dark:to-slate-900'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar />
        <div className='flex flex-1 flex-col overflow-hidden'>
          <Header />
        </div>
      </div>
    </div>
  )
}

export default App
