import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import MyWork from "./pages/MyWork";
import Writing from "./pages/Writing";
import ArticleDetail from "./pages/ArticleDetail";
import Art from "./pages/Art";
import ArtDoorwayDetail from "./pages/ArtDoorwayDetail";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { LanguageProvider } from "./contexts/LanguageContext";

function Router() {
  // make sure to consider if you need authentication for certain routes
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <WouterRouter base={base}>
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route path={"/about"} component={About} />
      <Route path={"/work"} component={MyWork} />
      <Route path={"/writing/:slug"} component={ArticleDetail} />
      <Route path={"/writing"} component={Writing} />
      <Route path={"/services/:serviceId"} component={Services} />
      <Route path={"/services"} component={Services} />
      <Route path={"/art/watercolour"} component={ArtDoorwayDetail} />
      <Route path={"/art/expressive-arts"} component={ArtDoorwayDetail} />
      <Route path={"/art/art-in-community"} component={ArtDoorwayDetail} />
      <Route path={"/art"} component={Art} />
      <Route path={"/contact"} component={Contact} />
      <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
