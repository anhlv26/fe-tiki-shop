import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "~/routes";
import DefaultComponent from "~/components/DefaultComponent/DefaultComponent";
import Box from "@mui/material/Box";
import { Fragment } from "react/jsx-runtime";

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
