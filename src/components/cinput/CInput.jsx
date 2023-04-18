import { Input } from 'antd';
import './style.scss';

const CInput = (props) => {
  const { style, className, onChange, type, value, name, label, placeholder } = props;
  return (
    <div className='cinput'>
      <label >{label}</label>
      <Input
        style={style}
        className={`input ${className}`}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CInput;