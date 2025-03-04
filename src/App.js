import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MetricCard from './components/MetricCard';
import LineChart from './components/LineChart';
import DeviceTrafficChart from './components/DeviceTrafficChart';
import LocationTrafficChart from './components/LocationTrafficChart';
import ProductTrafficChart from './components/ProductTrafficChart';
import ProjectsTable from './components/ProjectsTable';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <div className="top-bar">
          <div className="breadcrumb">
            <span className="icon">⬚</span>
            <span className="icon">⭐</span>
            <span>Dashboards</span>
            <span>/</span>
            <span>Overview</span>
          </div>
          <div className="right-controls">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search" />
            </div>
            <button className="icon-button">🌞</button>
            <button className="icon-button">⟳</button>
            <button className="icon-button">🔔</button>
          </div>
        </div>
        
        <div className="metrics-row">
          <MetricCard 
            title="Views" 
            value="7,265" 
            change="+11.01%" 
            positive={true} 
            color="blue" 
          />
          <MetricCard 
            title="Visits" 
            value="3,671" 
            change="-0.03%" 
            positive={false} 
            color="black" 
          />
          <MetricCard 
            title="New Users" 
            value="256" 
            change="+15.03%" 
            positive={true} 
            color="blue" 
          />
          <MetricCard 
            title="Active Users" 
            value="2,318" 
            change="+6.08%" 
            positive={true} 
            color="black" 
          />
        </div>
        
        <div className="chart-section">
          <div className="tab-row">
            <div className="tabs">
              <button className="tab active">Users</button>
              <button className="tab">Projects</button>
              <button className="tab">Operating Status</button>
            </div>
            <div className="right-controls">
              <div className="period-selector">
                <span>Week</span>
                <span className="arrow-down">▼</span>
              </div>
              <button className="icon-button">📊</button>
              <button className="icon-button">⋮</button>
            </div>
          </div>
          <LineChart />
        </div>
        
        <div className="traffic-row">
          <div className="traffic-card">
            <div className="card-header">
              <h3>Device Traffic</h3>
              <button className="icon-button">⋮</button>
            </div>
            <DeviceTrafficChart />
          </div>
          <div className="traffic-card">
            <div className="card-header">
              <h3>Location Traffic</h3>
              <button className="icon-button">⋮</button>
            </div>
            <LocationTrafficChart />
          </div>
        </div>
        
        <div className="product-traffic-section">
          <div className="card-header">
            <h3>Product Traffic</h3>
            <div className="legend">
              <div className="legend-item">
                <span className="dot dot-black"></span>
                <span>All</span>
              </div>
              <div className="legend-item">
                <span className="dot dot-blue"></span>
                <span>SnowUI</span>
              </div>
              <div className="legend-item">
                <span className="dot dot-red"></span>
                <span>Dashboard</span>
              </div>
              <button className="icon-button">⋮</button>
            </div>
          </div>
          <ProductTrafficChart />
        </div>
        
        <div className="projects-section">
          <div className="card-header">
            <h3>Projects</h3>
            <button className="icon-button">⋮</button>
          </div>
          <ProjectsTable />
        </div>
        
        <footer className="footer">
          <div className="byewind-section">
            <div className="avatar">👤</div>
            <span>ByeWind</span>
          </div>
          <div className="copyright">
            © 2025 SnowUI
          </div>
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Support</a>
            <a href="#">Contact Us</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;