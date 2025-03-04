import React from 'react';

function ProjectsTable() {
  const projects = [
    { 
      manager: 'ByeWind', 
      date: 'Jun 24, 2025', 
      amount: '$942.00', 
      status: 'In Progress', 
      statusClass: 'in-progress' 
    },
    { 
      manager: 'Natali Craig', 
      date: 'Mar 10, 2025', 
      amount: '$881.00', 
      status: 'Complete', 
      statusClass: 'complete' 
    },
    { 
      manager: 'Drew Cano', 
      date: 'Nov 10, 2025', 
      amount: '$409.00', 
      status: 'Pending', 
      statusClass: 'pending' 
    },
    { 
      manager: 'Orlando Diggs', 
      date: 'Dec 20, 2025', 
      amount: '$953.00', 
      status: 'Approved', 
      statusClass: 'approved' 
    },
    { 
      manager: 'Andi Lane', 
      date: 'Jul 25, 2025', 
      amount: '$907.00', 
      status: 'Rejected', 
      statusClass: 'rejected' 
    }
  ];
  
  return (
    <div className="projects-table">
      <div className="table-header">
        <div className="header-cell manager">Manager</div>
        <div className="header-cell date">Date</div>
        <div className="header-cell amount">Amount</div>
        <div className="header-cell status">Status</div>
      </div>
      
      {projects.map((project, index) => (
        <div className="table-row" key={index}>
          <div className="cell manager">
            <span className="bullet">⚪</span>
            <span>{project.manager}</span>
          </div>
          <div className="cell date">{project.date}</div>
          <div className="cell amount">{project.amount}</div>
          <div className="cell status">
            <span className={'status-badge ${project.statusClass}'}>
              {project.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsTable;