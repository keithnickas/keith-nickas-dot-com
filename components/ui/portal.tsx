import ReactDOM from "react-dom"

const Portal = (Component: React.ComponentType<any>) => (props: any) => {
  return ReactDOM.createPortal(
    <Component {...props} />,
    document.getElementById("portal-root") as Element
  )
};

export default Portal;
