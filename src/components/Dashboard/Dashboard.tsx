import ChartSection from './ChartSection';
import StatsGrid from './StatsGrid';

function Dashboard() {
  return (
    <div className='m-3 space-y-4'>
      {/* StatsGrid */}
      <StatsGrid />

      <ChartSection />
    </div>
  );
}

export default Dashboard;
