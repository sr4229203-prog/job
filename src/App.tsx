import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import JobList from './components/JobList'
import Navigation from './components/Navigation'
import LoginPage from './pages/LoginPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import PostJobPage from './pages/PostJobPage'
import JobDetailPage from './pages/JobDetailPage'
import AnalyticsPage from './pages/AnalyticsPage'
import SettingsPage from './pages/SettingsPage'
import DashboardPage from './pages/DashboardPage'
import JobsPage from './pages/JobsPage'
import ProfilePage from './pages/ProfilePage'
import EnhancedProfilePage from './pages/EnhancedProfilePage'
import SimplePage, { SavedJobsPage, ApplicationsPage } from './pages/SimplePage'
import NotificationsPage from './pages/NotificationsPage'
import TermsPage from './pages/TermsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import RecommendationsPage from './pages/RecommendationsPage'
import { sampleJobs } from './data'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/post-job" element={<PostJobPage />} />
            <Route path="/job/:id" element={
              <>
                <Navigation />
                <Header />
                <main>
                  <JobDetailPage />
                </main>
              </>
            } />
            <Route path="/dashboard" element={
              <>
                <Navigation />
                <Header />
                <main>
                  <DashboardPage />
                </main>
              </>
            } />
            <Route path="/jobs" element={
              <>
                <Navigation />
                <Header />
                <main>
                  <JobsPage />
                </main>
              </>
            } />
            <Route path="/profile" element={
              <>
                <Navigation />
                <Header />
                <main>
                  <ProfilePage />
                </main>
              </>
            } />
            <Route path="/simple" element={
              <>
                <Navigation />
                <Header />
                <main>
                  <SimplePage title="Simple Page" icon="📄" description="A simple placeholder page" />
                </main>
              </>
            } />
            <Route path="/saved-jobs" element={
              <>
                <Navigation />
                <Header />
                <main>
                  <SavedJobsPage />
                </main>
              </>
            } />
            <Route path="/applications" element={
              <>
                <Navigation />
                <Header />
                <main>
                  <ApplicationsPage />
                </main>
              </>
            } />
            <Route path="/analytics" element={
              <>
                <Navigation />
                <Header />
                <main>
                  <AnalyticsPage />
                </main>
              </>
            } />
            <Route path="/settings" element={
              <>
                <Navigation />
                <Header />
                <main>
                  <SettingsPage />
                </main>
              </>
            } />
            <Route path="/notifications" element={
              <>
                <Navigation />
                <Header />
                <main>
                  <NotificationsPage />
                </main>
              </>
            } />
            <Route path="/recommendations" element={
              <>
                <Navigation />
                <Header />
                <main>
                  <RecommendationsPage />
                </main>
              </>
            } />
            <Route path="/enhanced-profile" element={
              <>
                <Navigation />
                <Header />
                <main>
                  <EnhancedProfilePage />
                </main>
              </>
            } />
            <Route path="/about" element={
              <>
                <Header />
                <main>
                  <AboutPage />
                </main>
              </>
            } />
            <Route path="/contact" element={
              <>
                <Header />
                <main>
                  <ContactPage />
                </main>
              </>
            } />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/" element={
              <>
                <Header />
                <main>
                  <JobList jobs={sampleJobs} />
                </main>
              </>
            } />
          </Routes>
          <footer className="footer">
            <p>&copy; 2026 Academic Jobs Portal. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
