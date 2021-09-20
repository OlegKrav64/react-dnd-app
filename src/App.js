import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "react-redux";
import { Container } from "./components/Container/Container";
import { ModalList } from "./components/ModalList/ModalList";
import { getModalListVisibility } from "./redux/selectors/modalListSelector";

function App() {

  const modalListVisibility = useSelector(getModalListVisibility)

  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        <Container />
        { modalListVisibility &&
          <ModalList />
        }
      </DndProvider>
    </div>
  );
}

export default App;
