import React from 'react';
import './StatCard.css';

const StatCard = ({
  label,
  value,
  icon,
  colorClass,
  onClick,
  isSelected
}) => {
  return (
    <button
      onClick={onClick}
      className={`stat-card ${isSelected ? `selected ${colorClass}` : colorClass}`}
    >
      <div
        className={`icon-wrapper ${
          isSelected ? `icon-selected ${colorClass}` : colorClass
        }`}
      >
        {React.isValidElement(icon) &&
          React.cloneElement(icon, {
            className: `icon ${
              isSelected ? 'icon-white' : icon.props?.className || ''
            }`
          })}
      </div>

      <div className="stat-content">
        <p className={`stat-label ${isSelected ? 'active' : ''}`}>
          {label}
        </p>
        <p className="stat-value">{value}</p>
      </div>
    </button>
  );
};

export default StatCard;
