import { Button } from 'antd';
import './style.scss';


const CButton = (props) => {
    const {text, onClick, type='primary', className} = props;
  return (
   <Button onClick={onClick} type={type} className={`button ${className}`}> {text}</Button>
  );
};

export default CButton;