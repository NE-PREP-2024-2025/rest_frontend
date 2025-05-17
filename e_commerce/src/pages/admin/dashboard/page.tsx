
import Overview from '@/components/common/Overview';
export interface ViewData {
  id: number;
  primaryColor: string;
  secondaryColor: string;
  icon: string; 
  name: string;
  value: string;

}

export const viewsData: ViewData[] = [
  {
    id: 1,
    primaryColor: '#13B04C',
    secondaryColor: '#F3FAF5',
    icon: 'solar:buildings-2-broken',
    name: 'Products',
    value: '230',
  },
  {
    id: 2,
    primaryColor: '#F97315',
    secondaryColor: '#FFF6F0',
    icon: 'solar:users-group-two-rounded-broken',
    name: 'Users',
    value: '13K',
  
  },
  {
    id: 2,
    primaryColor: '#007315',
    secondaryColor: '#00F6F0',
    icon: 'solar:cart-check-broken',
    name: 'Cart',
    value: '130',
  
  },

];
const Dashboard = () => {
  return (
    <section className="flex flex-col gap-7">
      <Overview views={viewsData} />
    </section>
  );
};

export default Dashboard;
