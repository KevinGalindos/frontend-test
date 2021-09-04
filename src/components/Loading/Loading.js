import "./Loading.scss";

export const Loading = () => {
  return (
    <div className="loading">
      <div className="container">
        <div className="loader">
          <div className="arc"></div>
          <div className="arc"></div>
          <div className="arc"></div>
        </div>
      </div>
    </div>
  );
};
