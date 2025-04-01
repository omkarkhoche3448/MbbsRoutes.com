const AnnualExpensesSection = ({ annualExpenses }) => {
  if (!annualExpenses || !annualExpenses.expenses) return null;

  return (
    <div className="py-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">
            Finances
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            {annualExpenses.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding the cost of studying and living abroad is essential for planning your education journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {annualExpenses.expenses.map((expense, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {expense.category}
                </h3>
              </div>
              <p className="text-gray-700">{expense.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnualExpensesSection

