import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';
import { getFeaturedMovie, getMovieByGenres } from './service/MovieService';


export default async function Home() {
  const featuredMovie = await getFeaturedMovie('104');
  const genres = ['Drama', 'Action', 'Comedy', 'Animation']
  const movies = await Promise.all(
    genres.map( async (genre) => {
      const movies =  await getMovieByGenres(genre, { _limit: 8})
      return { sectionTitle: genre, movies };
    })
  );
  
  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header /> 
      <main className="relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 ">
        <Banner movie={featuredMovie} />
        {movies.map(movie =>(
          <MovieRow
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
            movies={movie.movies}
          />
        ))}
      </main>
    </div>
  )
}
