import WeatherInfo from '@/app/ui/dashboard/weather-info';
import { CropDailyCard } from '@/app/ui/dashboard/crop-daily-card';

export default async function Page() {
  return (
    <main className="flex flex-col-reverse xl:flex-row gap-5 mb-5"> {/* Main container with flex column on small screens, flex row on larger */}
  <div className="flex-grow"> {/* Grow to fill available space */}
    <CropDailyCard cropCode='B1-U1' cropClass='Sehat' />
    <CropDailyCard cropCode='B1-U2' cropClass='Sehat' />
    <CropDailyCard cropCode='B1-U3' cropClass='Sehat' />
  </div>
    <div className="rounded-xl flex-grow w-full xl:w-1/4 bg-green-50 bg-opacity-70">
    <WeatherInfo />
    </div>
    <div className="rounded-xl flex-grow w-full xl:w-1/4 bg-green-50 bg-opacity-70">
    <WeatherInfo />
    </div>
  </main>
  );
}
