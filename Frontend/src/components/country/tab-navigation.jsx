import { Link, useLocation } from "react-router-dom"

export const TabNavigation = ({ tabs }) => {
  const location = useLocation();
  
  return (
    <div className="border-b border-gray-200  sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8 overflow-x-auto hide-scrollbar">
          {tabs.map((tab, index) => {
            const isActive = location.pathname === tab.href || 
                           (tab.href.endsWith('/') && location.pathname === tab.href.slice(0, -1)) ||
                           (!tab.href.endsWith('/') && location.pathname === `${tab.href}/`);
            
            return (
              <Link
                key={index}
                to={tab.href}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all
                  ${
                    isActive
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};