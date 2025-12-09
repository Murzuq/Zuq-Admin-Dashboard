import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  Eye,
  ShoppingCart,
  User,
} from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$124,563',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-400',
    textColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    title: 'Active Users',
    value: '8,549',
    change: '+8.2%',
    trend: 'up',
    icon: User,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    textColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Total Orders',
    value: '2,847',
    change: '+15.3%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    textColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    title: 'Page Views',
    value: '45,892',
    change: '-2.1%',
    trend: 'down',
    icon: Eye,
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    textColor: 'text-orange-600 dark:text-orange-400',
  },
];

console.log(stats);

function StatsGrid() {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
      {stats.map((stats, index) => {
        return (
          <div
            className='group rounded-2xl border border-slate-200/50 bg-white/80 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/20 dark:border-slate-700/50 dark:bg-slate-900/80 dark:hover:shadow-slate-900/20'
            key={index}
          >
            <div className='flex items-start justify-between'>
              <div className='flex-1'>
                <p className='mb-2 text-sm font-medium text-slate-600 dark:text-slate-400'>
                  {stats.title}
                </p>
                <p className='mb-4 text-3xl font-bold text-slate-800 dark:text-white'>
                  {stats.value}
                </p>
                <div className='flex items-center space-x-2'>
                  {stats.trend === 'up' ? (
                    <ArrowUpRight className='text h-4 w-4 text-emerald-500' />
                  ) : (
                    <ArrowDownRight className='h-4 w-4 text-red-500' />
                  )}
                  <span
                    className={`text-sm font-semibold ${stats.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}
                  >
                    {stats.change}
                  </span>
                  <span className='text-sm text-slate-500 dark:text-slate-400'>
                    vs Last month
                  </span>
                </div>
              </div>
              <div
                className={`rounded-xl p-3 ${stats.bgColor}} transition-all duration-300 group-hover:scale-110`}
              >
                {<stats.icon className={`h-6 w-6 ${stats.textColor}`} />}
              </div>
            </div>
            {/* Progressbar */}
            <div className='mt-4 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800'>
              <div
                className={`h-full rounded-full bg-linear-to-r ${stats.color} transition-all duration-100`}
                style={{ width: stats.trend === 'up' ? '75%' : '45%' }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsGrid;
