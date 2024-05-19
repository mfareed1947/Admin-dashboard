import { useState } from 'react';
import { ProfileHeader } from './ProfileHeader';
import { Overview } from './tabs/Overview';
import { ActivityLogs } from './tabs/ActivityLogs';
import { tabItems } from './TabItemsData';

const GeneratorProfile = () => {
  console.log('Generator Profile');
  const [tab, setTab] = useState(tabItems[0].key);

  const handleActiveTabClick = (tab: string) => {
    setTab(tab);
  };

  return (
    <>
      <ProfileHeader activeTab={tab} setActiveTab={handleActiveTabClick} />

      <div className='row'>
        {tab === 'overview' && <Overview />}

        {tab === 'activity-logs' && <ActivityLogs />}
      </div>
    </>
  );
};

export { GeneratorProfile };
