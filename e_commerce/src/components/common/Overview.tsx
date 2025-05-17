import React from 'react';
import { Icon } from '@iconify/react';


interface ViewData {
  id: number;
  primaryColor: string;
  secondaryColor: string;
  icon: string;
  name: string;
  value: string;
  percentage: string;
}

interface OverviewProps {
  views: ViewData[];
}

const Overview: React.FC<OverviewProps> = ({ views }) => {
  return (
    <div className="rounded-[40px] bg-white px-10 py-6 min-h-[380px]">
      <h3 className="text-[28px] font-medium pb-2">Overview</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {views.map((view, index) => (
          <div
            key={view.id}
            className={`flex flex-col gap-3 ${index !== views.length - 1 ? 'border-r' : ''} p-6`}
          >
            <div className="p-2 rounded-full w-fit" style={{ backgroundColor: view.secondaryColor }}>
              <Icon icon={view.icon} width="25" height="25" color={view.primaryColor} />
            </div>
            <div className="flex items-center gap-2 pt-1">
              <p>{view.name}</p>
             
            </div>
            <div className="flex items-center gap-5 py-2">
              <h1 className="text-7xl">{view.value}</h1>
            </div>
      
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
