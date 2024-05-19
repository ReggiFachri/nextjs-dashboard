import BasicLineChart from '@/app/ui/dashboard/historical-chart';
import Info from '@/app/ui/dashboard/weather-info';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-3 xl:grid-cols-6">
        <div className="col-span-4">
          {/* Image */}
          <div className="mb-3 rounded-xl bg-green-50 bg-opacity-70">
            <Image
              src="/ndvi.png"
              width={1000}
              height={700}
              alt="NDVI image of farm area"
              className="hidden md:block"
            />
          </div>
          <BasicLineChart></BasicLineChart>
        </div>

        <div className="col-span-4 rounded-xl bg-green-50 bg-opacity-70 xl:col-span-2">
          <Info />
        </div>
      </div>
    </main>
  );
}
