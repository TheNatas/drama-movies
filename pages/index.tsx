import { GetStaticProps } from "next";
import Content from "../components/content";
import Header from "../components/header";

const Home = ({movies} : {
  movies: [{id: number, title: string, posterURL: string, imdbId: string}]
}) => {
  return(
    <>
      <Header></Header>
      <Content movies={movies}></Content>
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.sampleapis.com/movies/drama');
  const movies = await res.json();
  return{
    props: {
      movies
    }
  }
}