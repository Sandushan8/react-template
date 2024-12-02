import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from 'react-router-dom';
  
  export const ProtectedRoutes = () => {
    return (
      <Router>
        <Routes>
          {/* <Route
            path="/contacts"
            element={
              <Layout>
                <ContactsContainer />
              </Layout>
            }
          /> */}
          {/* <Route path="*" element={<Navigate to={'/contacts'} />} replace /> */}
        </Routes>
      </Router>
    );
  };
  