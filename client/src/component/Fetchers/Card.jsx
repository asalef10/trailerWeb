import { Link } from 'react-router-dom';
export default function MediaCard({ imgUrl, title, idMovie }) {
  return (
    <>
      <div
        className="card"
        style={{ width: '18rem', backgroundColor: 'black' }}
      >
        <div style={{ height: 'auto' }}>
          <img
            width="100%"
            class="card-img-top"
            src={`https://image.tmdb.org/t/p/w500//${imgUrl}`}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ color: 'white' }}>
            {title}
          </h5>
          <Link to={`/MovieDetails/${idMovie}`}>
            <p
              onClick={() => {}}
              style={{ backgroundColor: '#182635' }}
              className="btn btn-primary"
            >
              Show Details
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
