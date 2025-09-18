import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";   // 👈 add this
import UserLogin from "./UserServices/UserLogin";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
