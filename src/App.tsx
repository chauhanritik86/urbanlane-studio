import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Route, Switch, Router as WouterRouter } from "wouter";

// Page imports
import Home from "@/pages/Home";
import Studio from "@/pages/Studio";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import ProjectDetail from "@/pages/ProjectDetail";
import Gallery from "@/pages/Gallery";
import Process from "@/pages/Process";
import Testimonials from "@/pages/Testimonials";
import Materials from "@/pages/Materials";
import Journal from "@/pages/Journal";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";

function AppRouter() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/studio" component={Studio} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/:slug" component={ProjectDetail} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/process" component={Process} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/materials" component={Materials} />
          <Route path="/journal" component={Journal} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
      <AppRouter />
    </WouterRouter>
  );
}

export default App;
