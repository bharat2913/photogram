import React from 'react';
import { motion } from 'framer-motion';


const Model = ({ selectedImg, setSelectedImg }) => {
    
    
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')){
            setSelectedImg(null);            
        }
    }

    return ( 
        <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <motion.img src={selectedImg} alt="enlarged pic"
                 initial={{ scale: 0 }}
                 animate={{ rotate: 360, scale: 1 }}
                 transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
            />
        </motion.div>
     );
}
 
export default Model;