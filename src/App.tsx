import TodoContextProvider from "./context/TodoContextProvider";
import AppContent from "./components/app-content";

function App() {
  return (
    <TodoContextProvider>
      <AppContent />
    </TodoContextProvider>
  );
}

export default App;
