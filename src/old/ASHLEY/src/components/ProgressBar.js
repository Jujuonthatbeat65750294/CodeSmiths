function ProgressBar({ progress, total }) {
    // Calculate the percentage of progress
    const percentage = Math.floor((progress / total) * 100);
  
    return (
      <div className="progress-bar">
        <div className="progress" style={{width: `${percentage}%` }}></div>
      </div>
    );
  }
  export default ProgressBar;