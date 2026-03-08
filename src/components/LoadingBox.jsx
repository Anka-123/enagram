function LoadingBox({ progress }) {
  return (
    <div className="loading-box">

      <div className="spinner"></div>

      <div className="loading-content">
        <p>Converting... Thank you For your Patience</p>

        <div className="progress-row">
          <span>{progress}%</span>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default LoadingBox;