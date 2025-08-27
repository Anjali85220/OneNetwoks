import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

import PropTypes from 'prop-types';

const Sidebar = ({ activeSection, onSectionClick }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
      {/* Navigation Line */}
      <div className="relative">
        {/* Background Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-64 bg-gray-300"></div>
        
        {/* Active Section Indicator */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-red-600"
          initial={{ height: 0, y: 0 }}
          animate={{
            height: 64,
            y: menuItems.findIndex(item => item.id === activeSection) * 64
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />

        {/* Navigation Items */}
        <div className="relative space-y-0">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;
            
            return (
              <div key={item.id} className="relative h-16 flex items-center">
                {/* Navigation Dot */}
                <motion.button
                  onClick={() => onSectionClick(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative z-10 w-4 h-4 rounded-full border-2 border-gray-400 bg-white hover:border-red-600 transition-all duration-300 flex items-center justify-center group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Active Dot */}
                  <motion.div
                    className="w-2 h-2 rounded-full bg-red-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: isActive ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>

                {/* Label */}
                <motion.div
                  className="absolute left-8 flex items-center space-x-3 bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg border border-red-600/20"
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{
                    opacity: isHovered || isActive ? 1 : 0,
                    x: isHovered || isActive ? 0 : -20,
                    scale: isHovered || isActive ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ pointerEvents: 'none' }}
                >
                  <Icon size={16} className="text-red-600" />
                  <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;Sidebar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  onSectionClick: PropTypes.func.isRequired,
};

