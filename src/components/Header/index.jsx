import { Link } from 'react-router-dom';
import './style.css';

export const Header = ({ title }) => {
  return (
    <div>
      <nav>
        <Link to='/' className='text-content'>
          Home
        </Link>
        <Link to='/winners' className='text-content'>
          Hall of fame 🏆
        </Link>
      </nav>
      <h1 className='page-header'>{title}</h1>
    </div>
  );
};
