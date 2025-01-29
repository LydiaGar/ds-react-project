import "./style.css";

const TextBody = ({ children, size = "sm" }) => {
  return <p className={`cb-text-body cb-text-body--${size}`}>{children}</p>;
};

TextBody.propTypes = {
  children: () => {},
  size: () => {},
};

export default TextBody;