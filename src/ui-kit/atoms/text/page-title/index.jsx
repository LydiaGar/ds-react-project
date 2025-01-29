import "./style.css";

const PageTitle = ({ children }) => {
  return <h1 className="cb-page-title">{children}</h1>;
};

PageTitle.propTypes = {
  children: () => {},
};

export default PageTitle;