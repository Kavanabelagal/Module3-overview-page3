import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-icon">❄</span>
        <span className="logo-text">snowUI</span>
      </div>
      
      <div className="sidebar-menu">
        <div className="menu-item active">
          <span className="menu-icon">⚪</span>
          <span className="menu-text">Overview</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">🛒</span>
          <span className="menu-text">eCommerce</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">📂</span>
          <span className="menu-text">Projects</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">👤</span>
          <span className="menu-text">User Profile</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">🏢</span>
          <span className="menu-text">Account</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">🏛</span>
          <span className="menu-text">Corporate</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">📝</span>
          <span className="menu-text">Blog</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">👥</span>
          <span className="menu-text">Social</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;