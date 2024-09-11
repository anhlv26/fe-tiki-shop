import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { routes } from "~/routes";
import DefaultLayout from "~/components/DefaultLayout/DefaultLayout";
import { Box } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import HeaderOnlyLayout from "~/components/HeaderOnlyLayout/HeaderOnlyLayout";
import FooterOnlyLayout from "~/components/FooterOnlyLayout/FooterOnlyLayout";
import { useQuery } from "@tanstack/react-query";

function App() {
  // const fetchApi = async () => {
  //   const res = await axios.get(
  //     `http://localhost:3000/api/product/get-all-products`
  //   );
  //   console.log("res", res);
  // };

  // const query = useQuery({ queryKey: ["todos"], queryFn: fetchApi });
  return (
    <Box>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            let Layout: React.FC<{ children: React.ReactNode }> = Fragment;

            if (route.isShowHeader && route.isShowFooter) {
              Layout = DefaultLayout;
            } else if (route.isShowHeader) {
              Layout = HeaderOnlyLayout;
            } else if (route.isShowFooter) {
              Layout = FooterOnlyLayout;
            }
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
