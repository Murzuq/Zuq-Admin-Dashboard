import ChartSection from './ChartSection';
import StatsGrid from './StatsGrid';

function Dashboard() {
  return (
    <div className='m-3 space-y-4'>
      {/* StatsGrid */}
      <StatsGrid />

      {/* Charts Section */}
      <ChartSection />
    </div>
  );
}

export default Dashboard;
