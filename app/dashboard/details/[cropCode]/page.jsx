import WeatherInfo from '@/app/ui/dashboard/weather-info';
import EnvironmentInfo from '@/app/ui/dashboard/environment-info';
import NanobubbleInfo from '@/app/ui/dashboard/nanobubble-info';
import LineChart from '@/app/ui/dashboard/line-chart';
import StackedLineChart from '@/app/ui/dashboard/stacked-line-chart';
import GaugeChart from '@/app/ui/dashboard/gauge-chart';
import Image from "next/image"

export const metadata = {
  title: 'Detail',
}

export default async function Page({ params }) {
  return (
    <div className="flex flex-col mb-10 gap-4 md:flex-row">
      {/* detail */}
      <div className="grow flex-col rounded-xl bg-green-50 px-2 py-5">
        <h1 className=" text-xl md:text-2xl font-bold text-slate-900 px-10">
          Detail Tanaman {params.cropCode}
        </h1>

        {/* Sensor Map */}
        <div className='my-4 overflow-y-clip overflow-x-scroll max-h-52'>
          <Image className='min-w-fit'
            width={1000}
            height={700}
            src={`/sensor-map/${params.cropCode}.png`}
            alt='Sensor Map' />
        </div>

        {/* Crop Info */}
        <div className=' grid grid-cols-3 my-5 mx-3 gap-2'>
          <p className='font-semibold p-2'>Nutrisi</p>
          <p className='p-2'>:</p>
          <p className='border border-green-600 text-green-600 font-semibold max-w-fit p-2 rounded-full'>Larutan Hara</p>
          <p className='font-semibold p-2'>Pembentuk Tanah</p>
          <p className='p-2'>:</p>
          <p className='border border-green-600 text-green-600 font-semibold max-w-fit p-2 rounded-full'>Pupuk Kandang</p>
          <p className='font-semibold p-2'>Tingkat Kesehatan</p>
          <p className='p-2'>:</p>
          <p className='border border-green-600 text-green-600 font-semibold max-w-fit p-2 rounded-full'>Sehat</p>
          <p className='font-semibold p-2'>Penyakit</p>
          <p className='p-2'>:</p>
          <p className='border border-green-600 text-green-600 font-semibold max-w-fit p-2 rounded-full'>Tidak Ada</p>
        </div>

        {/* Line-Chart */}
        <div className=' flex flex-col md:flex-row flex-wrap overflow-auto md:overflow-visible'>
          <section className='mt-5 md:w-1/2'>
            <StackedLineChart cropCode={params.cropCode} />
          </section>

          <section className='mt-5 md:w-1/2'>
            <LineChart title='Kelembapan' cropCode={params.cropCode} />
          </section>

          <section className='mt-5 md:w-1/2'>
            <LineChart title='Suhu' cropCode={params.cropCode} />
          </section>

          <section className='mt-5 md:w-1/2'>
            <LineChart title='Konduktivitas' cropCode={params.cropCode} />
          </section>

          <section className='mt-5 md:w-1/2'>
            <LineChart title='pH' cropCode={params.cropCode} />
          </section>

          {/* <section className='mt-5 md:w-1/2'>
            <GaugeChart title='pH' index={6} minValue={0} maxValue={14} minSafe={0.4} maxSafe={0.7} />
          </section> */}
          
        </div>

      </div>

      {/* environment sensor */}
      <div className="flex flex-row gap-4 overflow-auto md:flex-col">
        <div className="rounded-xl bg-green-50 bg-opacity-70">
          <WeatherInfo />
        </div>
        <div className="rounded-xl bg-green-50 bg-opacity-70">
          <EnvironmentInfo />
        </div>
        <div className="rounded-xl bg-green-50 bg-opacity-70">
          <NanobubbleInfo />
        </div>
      </div>
    </div>
  );
}