import "./font-icons.css";

const Icon = ({ name, color = "primary" }) => {
  return (
    <span
      /* Genero el color dinámicamente con el valor de la propiedad */
      style={{ color: `var(--cb-color-text-${color})` }}
      className={`cb-icon-${name}`}
    ></span>
  );
};

Icon.propTypes = {
  name: () => {},
  color: () => {},
};

export default Icon;