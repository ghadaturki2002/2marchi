import { StoreProvider } from "./store";
import Website from "./Website";

export default function App() {
  return (
    <StoreProvider>
      <Website />
    </StoreProvider>
  );
}
