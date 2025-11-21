import React from "react";
import "../css/AppGrid.css";

interface AppItem {
  name: string;
  icon: string;      // URL or local import
  onClick?: () => void;
}

interface AppGridProps {
  apps: AppItem[];
}

const AppGrid: React.FC<AppGridProps> = ({ apps }) => {
  return (
  
      <div className="app-grid">
        {apps.map((app, index) => (
          <div 
            key={index}
            className="app-grid-item"
            onClick={app.onClick}
          >
            <img src={app.icon} alt={app.name} className="app-grid-icon" />
            <span className="app-grid-label">{app.name}</span>
          </div>
        ))}
      </div>
    
  );
};


export default AppGrid;
