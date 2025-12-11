import {
  Bell,
  Clock,
  CreditCard,
  Settings,
  ShoppingCart,
  User,
} from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'user',
    icon: User,
    title: 'New user registered',
    description: 'John Smith created an account',
    time: '2 minutes ago',
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    id: 2,
    type: 'order',
    icon: ShoppingCart,
    title: 'New order received',
    description: 'Order #3847 for $2,399',
    time: '5 minutes ago',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
  },
  {
    id: 3,
    type: 'payment',
    icon: CreditCard,
    title: 'Payment processed',
    description: 'payment of $1,199 completed',
    time: '12 minutes ago',
    color: 'text-purple-500',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    id: 4,
    type: 'system',
    icon: Settings,
    title: 'System update',
    description: 'Database backup completed',
    time: '1 minutes ago',
    color: 'text-orange-500',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
  },
  {
    id: 5,
    type: 'notification',
    icon: Bell,
    title: 'Low stock alert',
    description: 'iPhone 15 Pro stock is low',
    time: '2 hours ago',
    color: 'text-red-500',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
  },
];

function ActivityFeed() {
  return (
    <div className='rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/80'>
      <div className='border-b border-slate-200/50 p-6 dark:border-slate-700/50'>
        <div>
          <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
            Activity Feed
          </h3>
          <p className='text-sm text-slate-500 dark:text-slate-400'>
            Recent System Activities
          </p>
          <div>
            <button className='text-sm font-medium text-blue-500 hover:text-blue-700'>
              View All
            </button>
          </div>
          <div className='p-6'>
            <div className='space-y-4'>
              {activities.map((activity) => {
                return (
                  <div className='flex items-start space-x-4 rounded-xl p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50'>
                    <div className={`rounded-lg p-2 ${activity.bgColor}`}>
                      <activity.icon className={`h-4 w-4 ${activity.color}`} />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <h4 className='text-sm font-semibold text-slate-800 dark:text-white'>
                        {activity.title}
                      </h4>
                      <p className='truncate text-sm text-slate-600 dark:text-slate-400'>
                        {activity.description}
                      </p>
                      <div className='mt-1 flex items-center-safe space-x-1'>
                        <Clock className='h-3 w-3 text-slate-400' />
                        <span className='text-xs text-slate-500 dark:text-slate-400'>
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
