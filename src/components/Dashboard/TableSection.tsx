import { MoreHorizontal, TrendingDown, TrendingUp } from 'lucide-react';

type RecentOrders = {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: string;
  date: string;
};

const recentOrders: RecentOrders[] = [
  {
    id: '#3847',
    customer: 'John Smith',
    product: 'MacBook Pro 16',
    amount: '$2,399',
    status: 'completed',
    date: '2024-01-15',
  },
  {
    id: '#3848',
    customer: 'Sarah Johnson',
    product: 'iPhone 15 Pro',
    amount: '$1,199',
    status: 'pending',
    date: '2024-01-15',
  },
  {
    id: '#3849',
    customer: 'Mike Wilson',
    product: 'AirPods Pro',
    amount: '$249',
    status: 'completed',
    date: '2024-01-14',
  },
  {
    id: '#3850',
    customer: 'Emily Davis',
    product: 'iPad Air',
    amount: '$599',
    status: 'cancelled',
    date: '2024-01-14',
  },
];

const topProducts = [
  {
    name: 'MacBook Pro 16',
    sales: 1247,
    revenue: '$2,987,530',
    trend: 'up',
    change: '+12%',
  },
  {
    name: 'iPhone 15 Pro',
    sales: 2156,
    revenue: '$2,587,044',
    trend: 'up',
    change: '+8%',
  },
  {
    name: 'Airpods Pro',
    sales: 3421,
    revenue: '$852,229',
    trend: 'down',
    change: '-3%',
  },
  {
    name: 'iPad Air',
    sales: 987,
    revenue: '$591,213',
    trend: 'up',
    change: '+15%',
  },
];

function TableSection() {
  const getStatusColor = (status: any) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-700 darl:bg-emerald-900/30 dark:text-emerald-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 darl:bg-yellow-900/30 dark:text-yellow-400';
      case 'cancelled':
        return 'bg-red-100 text-red-700 darl:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-slate-100 text-slate-700 darl:bg-slate-900/30 dark:text-slate-400';
    }
  };

  return (
    <div className='space-y-6'>
      {/* Recent Order */}
      <div className='overflow-hidden rounded-b-2xl border border-slate-200/50 bg-white/80 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/80'>
        <div className='border-b border-slate-200/50 p-6 dark:border-slate-700/50'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                Recent Orders
              </h3>
              <p className='text-sm text-slate-500 dark:text-slate-400'>
                Latest customer orders
              </p>
            </div>
            <button className='text-sm font-medium text-blue-600 hover:text-blue-700'>
              View All
            </button>
          </div>
        </div>

        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr>
                <th className='p-4 text-left text-sm font-semibold text-slate-600'>
                  Order ID
                </th>
                <th className='p-4 text-left text-sm font-semibold text-slate-600'>
                  Product
                </th>
                <th className='p-4 text-left text-sm font-semibold text-slate-600'>
                  Amount
                </th>
                <th className='p-4 text-left text-sm font-semibold text-slate-600'>
                  Status
                </th>
                <th className='p-4 text-left text-sm font-semibold text-slate-600'>
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => {
                return (
                  <tr
                    className='border-b border-slate-200/50 transition-colors hover:bg-slate-50/50 dark:border-slate-700/50 dark:hover:bg-slate-800/50'
                    key={index}
                  >
                    <td className='p-4'>
                      <span className='text-blue text-sm font-medium'>
                        {order.id}
                      </span>
                    </td>
                    <td className='p-4'>
                      <span className='text-sm text-slate-800 dark:text-white'>
                        {order.customer}
                      </span>
                    </td>
                    <td className='p-4'>
                      <span className='text-sm text-slate-800 dark:text-white'>
                        {order.product}
                      </span>
                    </td>
                    <td className='p-4'>
                      <span className='text-sm text-slate-800 dark:text-white'>
                        {order.amount}
                      </span>
                    </td>
                    <td className='p-4'>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium text-slate-400 dark:text-white ${getStatusColor(order.status)}`}
                      >
                        {order.date}
                      </span>
                    </td>
                    <td className='p-4'>
                      <span className='text-sm text-slate-800 dark:text-white'>
                        <MoreHorizontal className='h-4 w-4' />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Prodcuts */}
      <div className='overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/80'>
        <div className='border-b border-slate-200/50 p-6 dark:border-slate-700/50'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-slate-800 dark:text-white'>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                Top Products
              </h3>
            </div>
            <p className='text-sm text-slate-500 dark:text-slate-400'>
              Best perfoming products
            </p>
          </div>
          <button className='text-sm font-medium text-blue-600 hover:text-blue-700'>
            View All
          </button>
        </div>

        {/* Dynamic Date */}
        <div className='space-y-4 p-6'>
          {topProducts.map((product, index) => {
            return (
              <div
                className='flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50'
                key={index}
              >
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-slate-800 dark:text-white'>
                    {product.name}
                  </h4>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>
                    {product.sales}
                  </p>
                </div>
                <div className='text-right'>
                  <p className='text text-sm font-semibold text-slate-800 dark:text-white'>
                    {product.revenue}
                  </p>
                  <div className='flex items-center space-x-1'>
                    {product.trend === 'up' ? (
                      <TrendingUp className='h-3 w-3 text-emerald-500' />
                    ) : (
                      <TrendingDown className='h-3 w-3 text-red-500' />
                    )}
                    <span
                      className={`text-xs font-medium ${product.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}
                    >
                      {product.change}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TableSection;
