import { Zap } from 'lucide-react'

function Sidebar() {
  return (
    <div className='relative z-10 flex flex-col border-r border-slate-200/50 bg-white/80 backdrop-blur-xl transition duration-300 ease-in-out dark:border-slate-700/50 dark:bg-slate-900/80'>
      {/* Logo */}
      <div className='border-b border-slate-200/50 p-6 dark:border-slate-700/50'>
        <div className='flex items-center space-x-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-purple-50 shadow-lg'>
            <Zap className='h-6 w-6 text-white' />
          </div>

          {/* Conditional Rendering */}
          <div>
            <h1 className='text-xl font-bold text-slate-800 dark:text-white'>
              Zuq Dashboard
            </h1>
            <p className='text-xs text-slate-500 dark:text-slate-400'>
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* Navigation  */}
      <nav className='flex-1 space-y-2 overflow-y-auto p-4'></nav>

      {/* User Profile */}
      <div className='border-t border-slate-200/50 p-4 dark:border-slate-700/50'>
        <div className='flex items-center space-x-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50'>
          <img
            src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2'
            alt=''
            className='h-10 w-10 rounded-full ring-2 ring-blue-500'
          />
          <div className='min-w-0 flex-1'>
            <div className='min-w-0 flex-1'>
              <p className='truncate text-sm font-medium text-slate-800 dark:text-white'>
                Alabi Murzuq
              </p>
              <p className='truncate text-xs text-slate-500 dark:text-slate-400'>
                Adminstrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
