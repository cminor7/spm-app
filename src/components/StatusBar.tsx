import React from "react";
import "../css/StatusBar.css";

export type StatusIcon = "info" | "success" | "warning" | "error" | "loading";

interface StatusBarProps {
  message: string;
  icon?: StatusIcon;
  progress?: {
    current: number;
    total: number;
  };
}

const StatusBar: React.FC<StatusBarProps> = ({ message, icon, progress }) => {
  const percentage =
    progress ? Math.round((progress.current / progress.total) * 100) : 0;

  const renderIcon = () => {
    switch (icon) {
      case "info":
        return <span className="status-icon">ℹ️</span>;
      case "success":
        return <span className="status-icon">✔️</span>;
      case "warning":
        return <span className="status-icon">⚠️</span>;
      case "error":
        return <span className="status-icon">❌</span>;
      case "loading":
        return <span className="status-icon spin">⏳</span>;
      default:
        return null;
    }
  };

  return (
    <div className="status-bar">
      <div className="status-content">
        {icon && renderIcon()}
        <span className="status-message">{message}</span>

        {progress && (
          <span className="status-progress-text">
            {progress.current} / {progress.total}
          </span>
        )}
      </div>

      {/* Progress Bar */}
      {progress && (
        <div className="status-progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default StatusBar;
