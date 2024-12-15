import { Box} from "@chakra-ui/react";
import { Footer, Navbar } from "@/components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { FormPage, Home } from "./Pages";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Router>
      <Box display="flex" flexDirection="column">
        <Navbar />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties/new" element={<FormPage />} />
            <Route path="/properties/edit/:id" element={<FormPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
