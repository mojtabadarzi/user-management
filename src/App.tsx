import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './providers/auth-provider';
import { lazy, Suspense } from 'react';
import { PageLoading } from './components/common/page-loading';
import ErrorBoundary from './components/common/error-boundry';

const LoginPage = lazy(() => import("./pages/login-page"))
const DashboardPage = lazy(() => import("./pages/dashboard-page"))
const UserDetailPage = lazy(() => import("./pages/user-details-page"))
const NotFound = lazy(() => import("./pages/not-found"))

const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/user/:id" element={<UserDetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider >
    </ErrorBoundary >
  );
};

export default App;
