import ActivityFeed from './ActivityFeed';
import ChartSection from './ChartSection';
import StatsGrid from './StatsGrid';
import TableSection from './TableSection';

function Dashboard() {
  return (
    <div className='m-3 space-y-4'>
      {/* StatsGrid */}
      <StatsGrid />

      {/* Charts Section */}
      <ChartSection />

      <div className='grid grid-cols-1 gap-6 xl:grid-cols-3'>
        <div className='xl:col-span-2'>
          <TableSection />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
