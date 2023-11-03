import AuditLog from "./components/AuditLog";  
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
function App() {
  return (
    
    <Router>
         <Routes>
           <Route exact path="" element={<AuditLog/>}/>
         </Routes>
    </Router>
  );
}

export default App;
