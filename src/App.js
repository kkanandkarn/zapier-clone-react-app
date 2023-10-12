import './App.css';
import Admin from './components/Admin';
import Login from './components/Login';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Editnavbar from './components/Editnavbar';
import Viewnavbar from './components/Viewnavbar';
import Viewalert from './components/Viewalert';
import Editalert from './components/Editalert';
import Viewherosection from './components/Viewherosection';
import Editherosection from './components/Editherosection';
import ViewImageMarquee from './components/ViewImageMarquee';
import EditImageMarquee from './components/EditImageMarquee';
import ViewCards from './components/ViewCards';
import EditCards from './components/EditCards';
import ViewFeatureSection from './components/ViewFeatureSection';
import EditFeatureSection from './components/EditFeatureSection';
import ViewSimpleFeatureSection from './components/ViewSimpleFeatureSection';
import EditSimpleFeatureSection from './components/EditSimpleFeatureSection';
import ViewTestimonials from './components/ViewTestimonials';
import EditTestimonials from './components/EditTestimonials';
import ViewBuilderBlock from './components/ViewBuilderBlock';
import EditBuilderBlock from './components/EditBuilderBlock';
import ViewFooter from './components/ViewFooter';
import EditFooter from './components/EditFooter';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/admin" element={<Admin />}> </Route>
          <Route path="/login" element={<Login />} >  </Route>
          <Route path="/viewnavbar" element={<Viewnavbar />} >  </Route>
          <Route path="/editnavbar" element={<Editnavbar />} >  </Route>
          <Route path="/viewalert" element={<Viewalert />} >  </Route>
          <Route path="/editalert" element={<Editalert />} >  </Route>
          <Route path="/viewherosection" element={<Viewherosection />} >  </Route>
          <Route path="/editherosection" element={<Editherosection />} >  </Route>
          <Route path="/viewimagemarquee" element={<ViewImageMarquee />} >  </Route>
          <Route path="/editimagemarquee" element={<EditImageMarquee />} >  </Route>
          <Route path="/viewcards" element={<ViewCards />} >  </Route>
          <Route path="/editcards" element={<EditCards />} >  </Route>
          <Route path="/viewfeaturesection" element={<ViewFeatureSection />} >  </Route>
          <Route path="/editfeaturesection" element={<EditFeatureSection />} >  </Route>
          <Route path="/viewsimplefeaturesection" element={<ViewSimpleFeatureSection />} >  </Route>
          <Route path="/editsimplefeaturesection" element={<EditSimpleFeatureSection />} >  </Route>
          <Route path="/viewtestimonials" element={<ViewTestimonials />} >  </Route>
          <Route path="/edittestimonials" element={<EditTestimonials />} >  </Route>
          <Route path="/viewbuilderblock" element={<ViewBuilderBlock />} >  </Route>
          <Route path="/editbuilderblock" element={<EditBuilderBlock />} >  </Route>
          <Route path="/viewfooter" element={<ViewFooter />} >  </Route>
          <Route path="/editfooter" element={<EditFooter />} >  </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
