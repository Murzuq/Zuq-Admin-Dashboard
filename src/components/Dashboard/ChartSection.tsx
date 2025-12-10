import RevenueChart from './RevenueChart';
import SalesChart from './SalesChart';

function ChartSection() {
  return (
    <div className='grid grid-cols-1 gap-6 xl:grid-cols-3'>
      <div className='xl:col-span-2'>
        <RevenueChart />
      </div>

      <div className='space-y-6'>
        <SalesChart />
      </div>
    </div>
  );
}

export default ChartSection;
