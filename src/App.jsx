import "./App.css";
import "./ui-kit/atoms/icon/font-icons.css";
import Subtitle from "./ui-kit/atoms/text/subtitle";
import Icon from "./ui-kit/atoms/icon";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Subtitle>Subtítulo por defecto</Subtitle>
      <Subtitle size="xs">Subtítulo pequeño</Subtitle>
      <Subtitle size="md">Subtítulo mediano</Subtitle>
      <Subtitle size="lg">Subtítulo grande</Subtitle>

      <Icon name="checkmark-circle" />
      <Icon name="search" />

      <Subtitle size="lg">
        Subtítulo con Icono: <Icon name="search" />
      </Subtitle>
    </>
  );
}

export default App;