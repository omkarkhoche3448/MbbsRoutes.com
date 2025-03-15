import { Link } from "react-router-dom"

export const TabNavigation = (props) => {
  const { tabs } = props;
  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto px-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              href={tab.href}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${
                  tab.isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
