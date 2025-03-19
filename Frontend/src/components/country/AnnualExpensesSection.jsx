import React from "react";

function AnnualExpensesSection({ annualExpenses }) {
  if (!annualExpenses || !annualExpenses.expenses) return null;

  return (
    <div className="container mx-auto px-4 md:px-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {annualExpenses.title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {annualExpenses.expenses.map((expense, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <h4 className="font-medium text-blue-700 mb-2">
              {expense.category}
            </h4>
            <p className="text-sm text-gray-700">{expense.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnnualExpensesSection;
