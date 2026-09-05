import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import MyWork from "./pages/MyWork";
import Writing from "./pages/Writing";
import ArticleDetail from "./pages/ArticleDetail";
import Art from "./pages/Art";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import StudioCMS from "./pages/StudioCMS";
import { LanguageProvider } from "./contexts/LanguageContext";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route path={"/about"} component={About} />
      <Route path={"/work"} component={MyWork} />
      <Route path={"/writing/:slug"} component={ArticleDetail} />
      <Route path={"/writing"} component={Writing} />
      <Route path={"/art"} component={Art} />
      <Route path={"/services"} component={Services} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/studio"} component={StudioCMS} />
      <Route component={NotFound} />
    </Switch>
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
