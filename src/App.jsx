import AppRoutes from "./routes/AppRoutes";
import BottomNav from "./components/navbar/BottomNav.jsx";
import { Helmet } from "react-helmet-async"; // ADD THIS


function App() {
  return (
    <>
     {/* ✅ ADD FALLBACK SEO HERE - Only shows if page doesn't have SEO */}
      <Helmet defaultTitle="Prabhat Rana | Frontend Developer Portfolio">
        <meta name="description" content="Prabhat Rana - Frontend Developer specializing in React.js, JavaScript, and responsive web applications." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <AppRoutes />
      <BottomNav />
    </>
  );
}

export default App;