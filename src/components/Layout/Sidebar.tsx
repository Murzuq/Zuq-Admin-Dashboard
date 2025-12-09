import { useState } from 'react';

import {
  BarChart3,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  Zap,
} from 'lucide-react';

type SubMenuItem = {
  id: string;
  label: string;
};

type MenuItem = {
  id: string;
  icon: React.ElementType;
  label: string;
  badge?: string;
  count?: string;
  submenu?: SubMenuItem[];
};

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
    badge: 'New',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    label: 'Analytics',
    submenu: [
      { id: 'analytics-overview', label: 'Overview' },
      { id: 'reports', label: 'Reports' },
      { id: 'insights', label: 'Insights' },
    ],
  },
  {
    id: 'users',
    icon: Users,
    label: 'Users',
    count: '2.4K',
    submenu: [
      { id: 'all-users', label: 'All Users' },
      { id: 'roles', label: 'Roles & Permissions' },
      { id: 'activity', label: 'User Activity' },
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    label: 'E-Commerce',
    submenu: [
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
    id: 'calendar',
    icon: Calendar,
    label: 'Calendar',
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
];

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
};

function Sidebar({
  collapsed,
  onToggle,
  currentPage,
  onPageChange,
}: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState(new Set(['analytics']));

  const toggleExpanded = (itemid: string) => {
    const newExpanded = new Set(expandedItems);

    if (newExpanded.has(itemid)) {
      newExpanded.delete(itemid);
    } else {
      newExpanded.add(itemid);
    }

    setExpandedItems(newExpanded);
  };

  return (
    <div
      className={`${collapsed ? 'w-20' : 'w-72'} relative z-10 flex flex-col border-r border-slate-200/50 bg-white/80 backdrop-blur-xl transition duration-300 ease-in-out dark:border-slate-700/50 dark:bg-slate-900/80`}
    >
      {/* Logo */}
      <div className='border-b border-slate-200/50 p-6 dark:border-slate-700/50'>
        <div className='flex items-center space-x-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-purple-500 shadow-lg'>
            <Zap className='h-6 w-6 text-white' />
          </div>

          {/* Conditional Rendering */}
          {!collapsed && (
            <div>
              <h1 className='text-xl font-bold text-slate-800 dark:text-white'>
                Zuq Dashboard
              </h1>
              <p className='text-xs text-slate-500 dark:text-slate-400'>
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation  */}
      <nav className='flex-1 space-y-2 overflow-y-auto p-4'>
        {menuItems.map((item) => {
          return (
            <div key={item.id}>
              <button
                className={`flex w-full items-center justify-between rounded-xl p-3 transition-all duration-200 ${currentPage === item.id ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50'}`}
                onClick={() => {
                  if (item.submenu) {
                    toggleExpanded(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
              >
                <div className='flex items-center space-x-3'>
                  <item.icon className={`h-5 w-5`} />
                  {/* Conditional Render */}
                  <>
                    {!collapsed && (
                      <span className='ml-2 font-medium'>{item.label}</span>
                    )}

                    {item.badge && (
                      <span className='rounded-full bg-red-500 px-2 py-1 text-xs text-white'>
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

                {!collapsed && item.submenu && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      expandedItems.has(item.id) ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {/* Sub Menus */}
              {!collapsed && item.submenu && expandedItems.has(item.id) && (
                <div className='mt-2 ml-8 space-y-1'>
                  {item.submenu?.map((subitem) => {
                    return (
                      <button
                        key={subitem.id}
                        onClick={() => onPageChange(subitem.id)}
                        className={`w-full rounded-lg p-2 text-left text-sm transition-colors duration-200 ${
                          currentPage === subitem.id
                            ? 'bg-slate-100 font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-100'
                            : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`}
                      >
                        {subitem.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Profile */}
      {!collapsed && (
        <div className='border-t border-slate-200/50 p-4 dark:border-slate-700/50'>
          <div className='flex items-center space-x-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50'>
            <img
              src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2'
              alt='Profile Picture'
              className='h-10 w-10 rounded-full ring-2 ring-blue-500'
            />
            <div className='min-w-0 flex-1'>
              <div className='min-w-0 flex-1'>
                <p className='truncate text-sm font-medium text-slate-800 dark:text-white'>
                  Alabi Murzuq
                </p>
                <p className='truncate text-xs text-slate-500 dark:text-slate-400'>
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
