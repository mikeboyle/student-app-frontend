import './Container.css';

const Container = ({ center, children }) => {
  const classNames = ['Container'];

  if (center) {
    classNames.push('Container--center');
  }

  return <div className={classNames.join(' ')}>{children}</div>;
};

export default Container;
