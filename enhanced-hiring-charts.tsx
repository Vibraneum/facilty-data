import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, ComposedChart, Area, Scatter } from 'recharts';

const EnhancedHiringAnalysis = () => {
  // White collar vs Blue collar categorization
  const collarTypeData = [
    { 
      name: 'White Collar', 
      positions: 45, 
      averageSalary: 34500, 
      totalBudget: 1552500, 
      uniqueRoles: 16,
      departments: [
        { name: 'Management', count: 14 },
        { name: 'Sales & BD', count: 8 },
        { name: 'HR & Admin', count: 3 },
        { name: 'Finance', count: 1 },
        { name: 'Specialized Roles', count: 5 },
        { name: 'Professional Interns', count: 14 }
      ]
    },
    { 
      name: 'Blue Collar', 
      positions: 74, 
      averageSalary: 11818, 
      totalBudget: 874500, 
      uniqueRoles: 8,
      departments: [
        { name: 'Housekeeping', count: 58 },
        { name: 'Security', count: 9 },
        { name: 'Maintenance', count: 3 },
        { name: 'Field Interns', count: 4 }
      ]
    }
  ];
  
  // Salary distribution by role type
  const salaryDistributionData = [
    { name: 'Vice Presidents', count: 2, minSalary: 100000, maxSalary: 100000, avgSalary: 100000, collar: 'White' },
    { name: 'Managers', count: 9, minSalary: 40000, maxSalary: 50000, avgSalary: 45000, collar: 'White' },
    { name: 'Executives', count: 12, minSalary: 30000, maxSalary: 45000, avgSalary: 35000, collar: 'White' },
    { name: 'Interns', count: 22, minSalary: 15000, maxSalary: 20000, avgSalary: 17500, collar: 'White' },
    { name: 'Supervisors', count: 14, minSalary: 15000, maxSalary: 25000, avgSalary: 17000, collar: 'Blue' },
    { name: 'Skilled Labor', count: 3, minSalary: 16000, maxSalary: 20000, avgSalary: 18000, collar: 'Blue' },
    { name: 'Security', count: 9, minSalary: 12000, maxSalary: 16000, avgSalary: 14000, collar: 'Blue' },
    { name: 'Housekeeping', count: 48, minSalary: 8000, maxSalary: 14500, avgSalary: 10500, collar: 'Blue' }
  ];
  
  // Location distribution data
  const locationData = [
    { name: 'Niloufer Hitech City', count: 32, collar: 'Blue' },
    { name: 'TSSC Hakempet', count: 6, collar: 'Blue' },
    { name: 'Amare', count: 6, collar: 'Blue' },
    { name: 'Concern', count: 3, collar: 'Blue' },
    { name: '185 Hyd PS sites', count: 9, collar: 'Blue' },
    { name: '100 Cyb PS sites', count: 7, collar: 'Blue' },
    { name: 'Heritage', count: 8, collar: 'Blue' },
    { name: 'Corporate Office', count: 25, collar: 'White' },
    { name: 'Multi-location', count: 5, collar: 'White' },
    { name: 'Back Office', count: 18, collar: 'White' }
  ];
  
  // Role vs Salary data (for scatter plot)
  const roleVsSalaryData = [
    { role: 'VP Operations', count: 1, salary: 100000, collar: 'White' },
    { role: 'VP Sales', count: 1, salary: 100000, collar: 'White' },
    { role: 'Operations Manager', count: 2, salary: 50000, collar: 'White' },
    { role: 'Facility Managers', count: 2, salary: 45000, collar: 'White' },
    { role: 'Finance Executives', count: 1, salary: 42500, collar: 'White' },
    { role: 'HR Manager', count: 1, salary: 40000, collar: 'White' },
    { role: 'Recruitment Manager', count: 1, salary: 40000, collar: 'White' },
    { role: 'BD & Marketing Head', count: 1, salary: 40000, collar: 'White' },
    { role: 'Project Manager', count: 1, salary: 35000, collar: 'White' },
    { role: 'Facility Executives', count: 4, salary: 35000, collar: 'White' },
    { role: 'Design Engineer', count: 1, salary: 32500, collar: 'White' },
    { role: 'Assistant Manager', count: 1, salary: 35000, collar: 'White' },
    { role: 'Hygiene Head', count: 1, salary: 30000, collar: 'White' },
    { role: 'Sales Executive', count: 2, salary: 30000, collar: 'White' },
    { role: 'Sales Interns', count: 2, salary: 20000, collar: 'White' },
    { role: 'HR Executives', count: 1, salary: 17500, collar: 'White' },
    { role: 'Carpenter', count: 2, salary: 19000, collar: 'Blue' },
    { role: 'Plumber', count: 1, salary: 19000, collar: 'Blue' },
    { role: 'Electrician', count: 1, salary: 17000, collar: 'Blue' },
    { role: 'Housekeeping Supervisors', count: 14, salary: 17000, collar: 'Blue' },
    { role: 'Security Guards (Amare)', count: 3, salary: 16000, collar: 'Blue' },
    { role: 'Housekeeping Executives', count: 3, salary: 15000, collar: 'Blue' },
    { role: 'Housekeeping Boys/Girls (Niloufer)', count: 30, salary: 14500, collar: 'Blue' },
    { role: 'Security Guards (TSSC)', count: 6, salary: 12000, collar: 'Blue' },
    { role: 'Housekeeping Boys (Amare)', count: 3, salary: 10000, collar: 'Blue' },
    { role: 'Housekeeping Boys (185 Hyd)', count: 3, salary: 10000, collar: 'Blue' },
    { role: 'Housekeeping Boys (Concern)', count: 2, salary: 8000, collar: 'Blue' },
    { role: 'Housekeeping Boys (100 Cyb)', count: 3, salary: 8000, collar: 'Blue' }
  ];
  
  // Budget allocation by collar type
  const budgetData = [
    { name: 'White Collar (₹15.5L)', value: 1552500, color: '#0088FE' },
    { name: 'Blue Collar (₹8.7L)', value: 874500, color: '#00C49F' }
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#ff6b6b'];
  
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Ixora Group and Loocafe - Workforce Analysis</h1>
      
      {/* White Collar vs Blue Collar Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">White Collar vs Blue Collar Distribution</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={collarTypeData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip formatter={(value, name) => {
                  if (name === 'positions') return [`${value} positions`, 'Count'];
                  if (name === 'uniqueRoles') return [`${value} roles`, 'Unique Roles'];
                  if (name === 'averageSalary') return [`₹${value.toLocaleString()}`, 'Avg Salary'];
                  return [value, name];
                }} />
                <Legend />
                <Bar yAxisId="left" dataKey="positions" name="Total Positions" fill="#8884d8" />
                <Bar yAxisId="left" dataKey="uniqueRoles" name="Unique Roles" fill="#ffc658" />
                <Line yAxisId="right" type="monotone" dataKey="averageSalary" name="Avg. Salary (₹)" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Departmental Breakdown</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    ...collarTypeData[0].departments.map(d => ({...d, collar: 'White'})),
                    ...collarTypeData[1].departments.map(d => ({...d, collar: 'Blue'}))
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                  label={({ name, count, percent }) => percent > 0.03 ? `${name}: ${count} (${(percent * 100).toFixed(0)}%)` : ''}
                >
                  {[
                    ...collarTypeData[0].departments.map((d, i) => (
                      <Cell key={`cell-white-${i}`} fill={COLORS[i % 4]} stroke="#0088FE" strokeWidth={2} />
                    )),
                    ...collarTypeData[1].departments.map((d, i) => (
                      <Cell key={`cell-blue-${i}`} fill={COLORS[4 + (i % 4)]} stroke="#00C49F" strokeWidth={2} />
                    ))
                  ]}
                </Pie>
                <Tooltip formatter={(value) => [`${value} positions`, 'Count']} />
                <Legend formatter={(value, entry) => {
                  const item = [...collarTypeData[0].departments, ...collarTypeData[1].departments].find(d => d.name === value);
                  return item ? `${value} (${item.collar} Collar)` : value;
                }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Salary Distribution */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Salary Distribution by Role Type</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salaryDistributionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip formatter={(value, name, props) => {
                  if (name === 'count') return [`${value} positions`, 'Count'];
                  if (name === 'avgSalary') return [`₹${value.toLocaleString()}`, 'Average Salary'];
                  return [value, name];
                }} />
                <Legend />
                <Bar yAxisId="left" dataKey="count" name="Number of Positions" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="avgSalary" name="Average Salary (₹)" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Role vs Salary visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Salary Range by Collar Type</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={collarTypeData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']} />
                <Legend />
                <Bar dataKey="totalBudget" name="Total Budget (₹)" fill="#8884d8" />
                <Line type="monotone" dataKey="averageSalary" name="Avg. Salary (₹)" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Monthly Budget Allocation</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Location Analysis */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Position Distribution by Location</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={locationData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={150} />
              <Tooltip formatter={(value) => [`${value} positions`, 'Count']} />
              <Legend />
              <Bar dataKey="count" name="Number of Positions" fill={(data) => data.collar === 'White' ? '#0088FE' : '#00C49F'} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Key Statistics */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Key Workforce Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600">Total Positions</p>
            <p className="text-2xl font-bold text-blue-700">119</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600">Total Unique Roles</p>
            <p className="text-2xl font-bold text-blue-700">24</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600">White/Blue Ratio</p>
            <p className="text-2xl font-bold text-green-700">38:62</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600">Avg Blue Collar Salary</p>
            <p className="text-2xl font-bold text-yellow-700">₹11.8K</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600">Monthly Budget</p>
            <p className="text-2xl font-bold text-green-700">₹24.3L</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600">Avg White Collar Salary</p>
            <p className="text-2xl font-bold text-yellow-700">₹34.5K</p>
          </div>
          <div className="bg-red-50 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600">Highest Position Count</p>
            <p className="text-2xl font-bold text-red-700">Housekeeping (58)</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600">Salary Range</p>
            <p className="text-2xl font-bold text-purple-700">₹8K-₹1L</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHiringAnalysis;
