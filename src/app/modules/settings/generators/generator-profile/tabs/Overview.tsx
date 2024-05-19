import { StatisticsWidget } from './components/StatisticsWidget';
import { OnTimeStatisticsChart } from './components/OnTimeStatisticsChart';
import { ActivityTimeline } from './components/ActivityTimeline';

const Overview = () => {
  return (
    <>
      <div className='col-xl-4'>
        <StatisticsWidget />
      </div>

      <div className='col-xl-8'>
        <OnTimeStatisticsChart />
      </div>

      <div className='col-xl-4'>
        <ActivityTimeline />
      </div>
    </>
  );
};

export { Overview };
