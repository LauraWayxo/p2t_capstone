import './App.css'
import AppRoutes from './AppRoutes';
import { Button } from "./components/ui/button";

function App() {

  return (
    <section >
    <AppRoutes />
      <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click Me</Button>
    </div>
    </section>
  )
}

export default App;
