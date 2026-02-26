export const Jumbotron = () => {
  return (
    <div className="jumbotron-container container-fluid w-75 mx-auto my-3">
      <div className="bg-primary-subtle p-4 jumbotron">
        <h1>Welcome!</h1>
        <p>
          Check out some of these under-the-radar destinations that you might
          want to visit someday.
        </p>
        <p>
          Many of them are not very well-known, which could be great if you want
          to explore without long lines!
        </p>
        <button className="btn btn-primary me-3">Get the full list</button>
        <button className="btn btn-success">Suggest a place</button>
      </div>
    </div>
  );
};
