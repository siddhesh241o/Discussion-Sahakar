import React from 'react';
import { Clipboard, AlertCircle, Fullscreen } from 'lucide-react';

const ProjectDetails = () => {
  const projectDetails = {
    name: "Gas Pipeline Installation Project",
    description: "This project aims to install gas pipelines under existing roads to expand the city's natural gas infrastructure.",
    scope: "Installation of 50 miles of gas pipelines beneath major city roads.",
    timeline: "Start: January 2025, End: December 2026",
    estimatedCost: "$25 million",
    fundingSources: "Municipal bonds and federal infrastructure grants",
    designSpecs: "36-inch diameter steel pipes, minimum depth of 4 feet",
    permits: "City excavation permit, Environmental impact assessment",
    riskAssessment: "Traffic disruption, potential utility line conflicts",
    progressReports: "Monthly updates to city council and stakeholders"
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100%',
      backgroundColor: '#f3f4f6', // Light gray background
    },
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#2563eb', // Blue color for section title
    },
    detailsSection: {
      width: '50%',
      padding: '24px',
      overflowY: 'auto',
    },
    detailsCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      padding: '24px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#1e40af', // Darker blue for card title
      borderBottom: '2px solid #3b82f6',
      paddingBottom: '8px',
    },
    detailItem: {
      marginBottom: '16px',
      padding: '12px',
      backgroundColor: '#f0f9ff', // Light blue background
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    detailTitle: {
      fontWeight: 600,
      textTransform: 'capitalize',
      color: '#1e40af', // Darker blue for detail titles
      marginBottom: '4px',
    },
    detailContent: {
      color: '#4b5563', // Gray color for content
    },
    progressSection: {
      width: '50%',
      padding: '24px',
      backgroundColor: '#e5e7eb',
    },
    progressTimeline: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    taskCard: {
      width: '240px',
      height: '240px',
      padding: '16px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom:'2vh',
      border: '2px solid black',
    },
    right: {
      float: 'right',
      backgroundColor: '#22c55e', // Green
    },
    left: {
      float: 'left',
      backgroundColor: '#fb923c', // Orange
    },
    taskNumber: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    taskTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    actionButtons: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      display: 'flex',
      gap: '16px',
    },
    actionBtn: {
      padding: '12px',
      borderRadius: '50%',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
    },
    yellow: {
      backgroundColor: '#facc15',
    },
    blue: {
      backgroundColor: '#3b82f6',
    },
  };

  return (
    <div style={styles.container}>
      {/* Project Details Section */}
      <div style={styles.detailsSection}>
        <h2 style={styles.sectionTitle}>Project Details</h2>
        <div style={styles.detailsCard}>
          <h3 style={styles.cardTitle}>{projectDetails.name}</h3>
          {Object.entries(projectDetails).map(([key, value]) => (
            <div key={key} style={styles.detailItem}>
              <h4 style={styles.detailTitle}>{key.replace(/([A-Z])/g, ' $1').trim()}:</h4>
              <p style={styles.detailContent}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Tracking Section */}
      <div style={styles.progressSection}>
        <h2 style={styles.sectionTitle}>Progress Tracking</h2>
        <div style={styles.progressTimeline}>
          {/* Completed Task (Right) */}
          <div style={{ ...styles.taskCard, marginLeft: 'auto', ...styles.right }}>
            <div style={styles.taskNumber}>01</div>
            <div>
              <h3 style={styles.taskTitle}>Completed</h3>
              <p>Submit a formal request with project details</p>
            </div>
          </div>

          {/* In Progress Task (Left) */}
          <div style={{ ...styles.taskCard, ...styles.left }}>
            <div style={styles.taskNumber}>02</div>
            <div>
              <h3 style={styles.taskTitle}>Status: 90%</h3>
              <p>Civil Department: Schedule an inspection</p>
            </div>
          </div>

          {/* Locked Task (Right) */}
          <div style={{ ...styles.taskCard, ...styles.right, marginLeft: 'auto' }}>
            <div style={styles.taskNumber}>03</div>
            <div>
              <h3 style={styles.taskTitle}>Locked Task</h3>
              <p>Submit a formal request with project details</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div style={styles.actionButtons}>
        <button style={{ ...styles.actionBtn, ...styles.yellow }}>
          <Clipboard size={24} color="white" />
        </button>
        <button style={{ ...styles.actionBtn, ...styles.blue }}>
          <AlertCircle size={24} color="white" />
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;