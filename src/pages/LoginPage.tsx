import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      }
      navigate('/dashboard');
    } catch {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">🎓</div>
            <h1>Academic Jobs</h1>
            <p className="login-tagline">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </p>
          </div>

          <form
            className="login-form"
            onSubmit={isSignUp ? handleSignUp : handleLogin}
          >
            {isSignUp && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  disabled={loading}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-group">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  disabled={loading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="form-group checkbox">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
            )}

            {error && <div className="error-message">{error}</div>}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  {isSignUp ? 'Creating account...' : 'Signing in...'}
                </>
              ) : isSignUp ? (
                'Create Account'
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="login-divider">
            <span>or</span>
          </div>

          <button className="oauth-button google">
            <span className="oauth-icon">🔍</span>
            Sign in with Google
          </button>

          <button className="oauth-button github">
            <span className="oauth-icon">⚙️</span>
            Sign in with GitHub
          </button>

          <div className="login-footer">
            {isSignUp ? (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  className="toggle-link"
                  onClick={() => {
                    setIsSignUp(false);
                    setError('');
                    setName('');
                  }}
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                Don't have an account?{' '}
                <button
                  type="button"
                  className="toggle-link"
                  onClick={() => {
                    setIsSignUp(true);
                    setError('');
                  }}
                >
                  Sign up
                </button>
              </>
            )}
          </div>

          <div className="login-additional-links">
            <Link to="/forgot-password" className="additional-link">
              Forgot password?
            </Link>
            <Link to="/terms" className="additional-link">
              Terms & Privacy
            </Link>
          </div>
        </div>

        <div className="login-feature-panel">
          <h2>Why join us?</h2>
          <ul className="feature-list">
            <li>
              <span className="feature-icon">📧</span>
              <div>
                <h3>Job Alerts</h3>
                <p>Get notified about positions matching your interests</p>
              </div>
            </li>
            <li>
              <span className="feature-icon">💼</span>
              <div>
                <h3>Saved Jobs</h3>
                <p>Bookmark positions to review later</p>
              </div>
            </li>
            <li>
              <span className="feature-icon">📊</span>
              <div>
                <h3>Analytics</h3>
                <p>Track your application statistics</p>
              </div>
            </li>
            <li>
              <span className="feature-icon">🤝</span>
              <div>
                <h3>Networking</h3>
                <p>Connect with other academics and institutions</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
