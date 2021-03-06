import utilStyles from '../styles/utils.module.css'

const Content = ({movies}: {
  movies: [{id: number, title: string, posterURL: string, imdbId: string}]
}) => {
  return(
    <div className={utilStyles.textAlignCenter}>
      {movies.map(({id, title, posterURL}) => (
        <div className={utilStyles.textAlignCenter} key={id}>
          <h2>
            {title}
          </h2>
          <img src={posterURL}></img>
        </div>
      ))}
    </div>
  )
}

export default Content;