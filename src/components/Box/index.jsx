import './styles.css';
import { motion } from 'framer-motion';

export const Box = ({ children, onClick }) => {
  return (
    <div className='box' onClick={onClick}>
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 }
        }}
      />
      {children}
    </div>
  );
};
