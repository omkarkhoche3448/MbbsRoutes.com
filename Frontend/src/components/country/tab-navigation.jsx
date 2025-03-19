import { Link, useLocation } from "react-router-dom"

export const TabNavigation = (props) => {
  const { tabs } = props;
  const location = useLocation();
  
  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto px-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab, index) => {
            // Dynamically determine if this tab is active
            const isActive = location.pathname === tab.href || 
                             (tab.href.endsWith('/') && location.pathname === tab.href.slice(0, -1)) ||
                             (!tab.href.endsWith('/') && location.pathname === `${tab.href}/`);
            
            return (
              <Link
                key={index}
                to={tab.href}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${
                    isActive
                      ? "border-blue-500 text-blue-600"
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