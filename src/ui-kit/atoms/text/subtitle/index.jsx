import "./style.css";

//definir componente como una variable tipo función
const Subtitle = ({ children, size }) => {
  if (size === "xs") {
    return <h4 className="cb-subtitle cb-subtitle--xs">{children}</h4>;
  }

  if (size === "md") {
    return <h3 className="cb-subtitle cb-subtitle--md">{children}</h3>;
  }

  //por defecto lo tratamos como lg
  return <h2 className="cb-subtitle cb-subtitle--lg">{children}</h2>;
};

//definimos la estructura que va a tener las props del componente
Subtitle.propTypes = {
  children: () => {},
  size: () => {},
};

export default Subtitle;