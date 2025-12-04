import {
  BarChart3,
  Calendar,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  Zap,
} from 'lucide-react'

const menuItems = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
    active: true,
    badge: 'New',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    label: 'Analytics',
    submenus: [
      { id: 'overview', label: 'Overview' },
      { id: 'reports', label: 'Reports' },
      { id: 'insights', label: 'Insights' },
    ],
  },
  {
    id: 'users',
    icon: Users,
    label: 'Users',
    count: '2.4K',
    submenus: [
      { id: 'all-users', label: 'All Users' },
      { id: 'roles', label: 'Roles & Permissions' },
      { id: 'activity', label: 'User Activity' },
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    label: 'E-Commerce',
    submenus: [
      { id: 'products', label: 'Products' },
      { id: 'orders', label: 'Orders' },
      { id: 'customers', label: 'Customers' },
    ],
  },
  {
    id: 'inventory',
    icon: Package,
    label: 'Inventory',
    count: '847',
  },
  {
    id: 'transactions',
    icon: CreditCard,
    label: 'Transactions',
  },
  {
    id: 'message',
    icon: MessageSquare,
    label: 'Message',
    badge: '12',
  },
  {
    id: 'calender',
    icon: Calendar,
    label: 'Calender',
  },
  {
    id: 'reports',
    icon: FileText,
    label: 'Reports',
  },
  {
    id: 'settings',
    icon: Settings,
    label: 'Settings',
  },
]

function Sidebar() {
  return (
    <div className='relative z-10 flex w-72 flex-col border-r border-slate-200/50 bg-white/80 backdrop-blur-xl transition duration-300 ease-in-out dark:border-slate-700/50 dark:bg-slate-900/80'>
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
      <nav className='flex-1 space-y-2 overflow-y-auto p-4'>
        {menuItems.map((item) => {
          return (
            <div key={item.id}>
              <button
                className={`flex w-full items-center justify-between rounded-xl p-3 transition-all duration-200`}
              >
                <div className='flex items-center space-x-3'>
                  <item.icon className={`h-5 w-5`} />
                  {/* Conditional Render */}
                  <>
                    <span className='ml-2 font-medium'>{item.label}</span>
                    {item.badge && (
                      <span className='text-white- rounded-full bg-red-500 px-2 py-1 text-xs'>
                        {item.badge}
                      </span>
                    )}
                    {item.count && (
                      <span className='rounded-full bg-slate-200 px-2 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300'>
                        {item.count}
                      </span>
                    )}
                  </>
                </div>
              </button>
            </div>
          )
        })}
      </nav>

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
