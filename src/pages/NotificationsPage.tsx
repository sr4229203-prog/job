import React, { useState } from 'react';
import './SimplePage.css';

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'application', title: 'Application Submitted', message: 'Your application for Assistant Professor - CS has been submitted successfully', time: '2 hours ago', read: false, icon: '📨' },
    { id: 2, type: 'status', title: 'Application Status Updated', message: 'Your application for Postdoc - Physics has been moved to Under Review', time: '5 hours ago', read: false, icon: '📊' },
    { id: 3, type: 'job', title: 'New Job Matching Your Profile', message: 'A new position in Machine Learning has been posted and matches your interests', time: '1 day ago', read: true, icon: '💼' },
    { id: 4, type: 'reminder', title: 'Application Deadline Approaching', message: 'Lecturer - Math application closes in 3 days', time: '2 days ago', read: true, icon: '⏰' },
    { id: 5, type: 'system', title: 'Account Verified', message: 'Your email address has been verified successfully', time: '3 days ago', read: true, icon: '✅' },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notifications-page">
      <div className="page-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔔</div>
          <h1>Notifications</h1>
          <p>{unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}</p>
        </div>

        <div style={{ marginBottom: '16px', display: 'flex', gap: '12px' }}>
          <button style={{
            padding: '8px 16px',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
          }}>
            Mark all as read
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {notifications.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '16px' }}>📭</span>
              <p>No notifications</p>
            </div>
          ) : (
            notifications.map(notif => (
              <div
                key={notif.id}
                style={{
                  background: notif.read ? 'white' : '#f8f9ff',
                  border: `1px solid ${notif.read ? '#e0e0e0' : '#667eea'}`,
                  borderRadius: '8px',
                  padding: '16px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ fontSize: '24px' }}>{notif.icon}</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 4px 0', color: '#1a1a1a' }}>{notif.title}</h4>
                  <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px' }}>{notif.message}</p>
                  <span style={{ fontSize: '12px', color: '#999' }}>{notif.time}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {!notif.read && (
                    <button
                      onClick={() => markAsRead(notif.id)}
                      style={{
                        padding: '6px 12px',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '12px',
                        cursor: 'pointer',
                      }}
                    >
                      Mark read
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notif.id)}
                    style={{
                      padding: '6px 12px',
                      background: '#f0f0f0',
                      color: '#666',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;