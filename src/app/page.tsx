import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';


export default function Home() {
  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header /> 
      <main className="relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 ">
        <Banner />
        <MovieRow sectionTitle='Trending Now' />
        <MovieRow sectionTitle='Top Rated'/>
        <MovieRow sectionTitle='Action Movies'/>
      </main>
    </div>
  )
}
