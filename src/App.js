import Dashboard from "./components/Dashboard/Dashboard";
import Projects from "./components/Projects/Projects";
import Layout from "./pages/Layout";
import Chat from "./components/Chat/Chat";
import AnalysisPage from "./pages/AnalysisPage";
import Profile from "./components/Profile/Profile";
import store from "./store";
import { BrowserRouter,Route,Routes  } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
	  <Provider store={store}>
    			<div className="app">
					 <div className="wrapper">
	 					 <BrowserRouter>
						  <Routes>
								<Route path="/" element={<Layout/>}>
									<Route index path="/" element={<Dashboard/>}/>
									<Route  path="chat" element={<Chat/>}/>
									<Route  path="profile" element={<Profile/>}/>
									<Route  path="projects" element={<Projects/>}/>
								</Route>								  
									<Route  path="/analysis" element={<AnalysisPage/>}/>
							</Routes>	
	 					</BrowserRouter>
					 </div>
    			</div>
	 </Provider>
  );
}

export default App;
