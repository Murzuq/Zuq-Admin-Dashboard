import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

type Data = {
  name: string;
  value: number;
  color: string;
};

const data: Data[] = [
  { name: 'Electronics', value: 45, color: '#3b82f6' },
  { name: 'Clothing', value: 30, color: '#8b5cf6' },
  { name: 'Books', value: 15, color: '#10b981' },
  { name: 'Other', value: 10, color: '#f59e0b' },
];

function SalesChart() {
  return (
    <div className='rounded-b-2xl border-slate-200/50 bg-white p-6 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900'>
      <div className='mb-6'>
        <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
          Sales by Category
        </h3>
        <p className='text-sm text-slate-500 dark:text-slate-400'>
          Production Distribution
        </p>
      </div>
      <div className='h-48'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255,255,255,0.95)',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            }}
          />
        </ResponsiveContainer>
      </div>

      <div className='space-y-3'>
        {data.map((item, index) => {
          return (
            <div className='flex items-center justify-between' key={index}>
              <div className='flex items-center space-x-3'>
                <div
                  className='h-3 w-3 rounded-full'
                  style={{ backgroundColor: item.color }}
                />
                <span className='text-sm text-slate-600 dark:text-slate-400'>
                  {item.name}
                </span>
              </div>
              <div className='text-sm font-semibold text-slate-800 dark:text-white'>
                {item.value}%
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SalesChart;
