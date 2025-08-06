import {
  FaChartLine,
  FaDollarSign,
  FaDownload,
  FaEdit,
  FaExchangeAlt,
  FaGift,
  FaShoppingBag,
  FaShoppingCart,
  FaTag,
  FaTrash,
  FaUsers,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FaBell, FaClipboardList } from "react-icons/fa";

const data = [
  { month: "Jan", total: 24, average: 30 },
  { month: "Feb", total: 14, average: 28 },
  { month: "Mar", total: 22, average: 33 },
  { month: "Apr", total: 28, average: 45 },
  { month: "May", total: 15, average: 50 },
  { month: "Jun", total: 23, average: 40 },
  { month: "Jul", total: 21, average: 65 },
  { month: "Aug", total: 44, average: 60 },
  { month: "Sep", total: 22, average: 55 },
  { month: "Oct", total: 26, average: 42 },
];
const products = [
  { name: "HeadPhone", status: "Pending", price: "$10" },
  { name: "Iphone 6", status: "Cancel", price: "$20" },
  { name: "Jacket", status: "Success", price: "$35" },
  { name: "Sofa", status: "Cancel", price: "$85" },
  { name: "Iphone 6", status: "Success", price: "$20" },
];
const conversionData = [
  { year: 2016, value: 13 },
  { year: 2017, value: 15 },
  { year: 2018, value: 10 },
];

const orderBarData = Array.from({ length: 20 }, (_, i) => ({
  day: i + 1,
  value: Math.floor(Math.random() * 60) + 10,
}));

const satisfactionData = [
  { name: "Very Poor", value: 400 },
  { name: "Satisfied", value: 300 },
  { name: "Very Satisfied", value: 200 },
  { name: "Poor", value: 100 },
];

const COLORS = ["#7b61ff", "#a78bfa", "#c4b5fd", "#ddd6fe"];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-600";
    case "Cancel":
      return "bg-red-100 text-red-600";
    case "Success":
      return "bg-green-100 text-green-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};
const feeds = [
  {
    icon: <FaBell className="text-purple-600" />,
    bg: "bg-purple-100",
    text: "You have 3 pending tasks.",
    time: "Just Now",
  },
  {
    icon: <FaShoppingCart className="text-red-600" />,
    bg: "bg-red-100",
    text: "New order received",
    time: "30 min ago",
  },
  {
    icon: <FaClipboardList className="text-green-600" />,
    bg: "bg-green-100",
    text: "You have 3 pending tasks.",
    time: "Just Now",
  },
  {
    icon: <FaBell className="text-purple-600" />,
    bg: "bg-purple-100",
    text: "You have 4 tasks Done.",
    time: "1 hours ago",
  },
  {
    icon: <FaClipboardList className="text-green-600" />,
    bg: "bg-green-100",
    text: "You have 2 pending tasks.",
    time: "Just Now",
  },
  {
    icon: <FaShoppingCart className="text-red-600" />,
    bg: "bg-red-100",
    text: "New order received",
    time: "4 hours ago",
  },
];

const Dashboard = () => {
  return (
    <div className="w-[85%] mx-auto my-8 grid grid-cols-2 gap-6 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col gap-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-lg overflow-hidden shadow-md bg-gray-200">
          {[
            { icon: <FaUsers />, value: "1000", label: "CUSTOMERS" },
            { icon: <FaDollarSign />, value: "$1252", label: "REVENUE" },
            { icon: <FaChartLine />, value: "600", label: "GROWTH" },
            { icon: <FaExchangeAlt />, value: "3550", label: "RETURNS" },
            { icon: <FaDownload />, value: "3550", label: "DOWNLOADS" },
            { icon: <FaShoppingCart />, value: "100%", label: "ORDER" },
          ].map((item, index) => (
            <div key={index} className="bg-white flex items-center gap-4 p-6">
              <div className="text-purple-500 text-2xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold">{item.value}</h3>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">53.94%</h2>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Conversion Rate
              </p>
              <p className="text-sm text-gray-400">
                Number of conversions divided by the total visitors.
              </p>
            </div>
            <div className="mt-6 h-32 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={conversionData}>
                  <XAxis dataKey="year" />
                  <YAxis hide />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">1432</h2>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Order delivered
              </p>
              <p className="text-sm text-gray-400">
                Total number of order delivered in this month.
              </p>
              <div className="flex justify-around text-sm font-semibold text-gray-700 mb-4 mt-4">
                {[
                  { label: "May", value: 130 },
                  { label: "June", value: 251 },
                  { label: "July", value: 235 },
                ].map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div>{m.value}</div>
                    <div className="text-xs text-gray-400">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-32 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={orderBarData}>
                  <XAxis dataKey="day" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#8b5cf6"
                    barSize={6}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-1">Customer Satisfaction</h2>
          <p className="text-sm text-gray-500 mb-4">
            It takes continuous effort to maintain high customer satisfaction
            levels Internal and external.
          </p>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={satisfactionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                  outerRadius={90}
                  dataKey="value"
                >
                  {satisfactionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  verticalAlign="middle"
                  align="right"
                  layout="vertical"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow mt-10">
          <h2 className="text-lg font-bold mb-4">New Products</h2>
          <div className="">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-gray-600 text-sm font-medium">
                  <th className="px-4 py-2">PRODUCT NAME</th>
                  <th className="px-4 py-2">STATUS</th>
                  <th className="px-4 py-2">PRICE</th>
                  <th className="px-4 py-2">ACTION</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className="bg-white shadow rounded-md hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-medium">{product.name}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                          product.status
                        )}`}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{product.price}</td>
                    <td className="px-4 py-3 flex items-center gap-3">
                      <button>
                        <FaEdit className="text-green-500 hover:text-green-600" />
                      </button>
                      <button>
                        <FaTrash className="text-red-500 hover:text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <ResponsiveContainer width="100%" height={600}>
          <ComposedChart data={data}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="total"
              barSize={30}
              fill="#8884d8"
              name="Total Sales"
            />
            <Line
              type="monotone"
              dataKey="average"
              stroke="#8884d8"
              name="Average"
            />
          </ComposedChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-3 mt-8">
          {/* Total Profit */}
          <div className="bg-white rounded-lg p-5 shadow flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Profit</p>
              <h2 className="text-2xl font-bold mt-1">$1,783</h2>
            </div>
            <FaGift className="text-purple-500 text-2xl" />
          </div>

          {/* Total Orders */}
          <div className="bg-purple-500 rounded-lg p-5 shadow flex items-center justify-between text-white">
            <div>
              <p className="text-sm font-medium">Total Orders</p>
              <h2 className="text-2xl font-bold mt-1">15,830</h2>
            </div>
            <FaShoppingBag className="text-white text-2xl" />
          </div>

          {/* Average Price */}
          <div className="bg-purple-500 rounded-lg p-5 shadow flex items-center justify-between text-white">
            <div>
              <p className="text-sm font-medium">Average Price</p>
              <h2 className="text-2xl font-bold mt-1">$6,780</h2>
            </div>
            <FaDollarSign className="text-white text-2xl" />
          </div>

          {/* Product Sold */}
          <div className="bg-white rounded-lg p-5 shadow flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Product Sold</p>
              <h2 className="text-2xl font-bold mt-1">6,784</h2>
            </div>
            <FaTag className="text-gray-500 text-2xl" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow w-[85%] mx-auto mt-10">
          <h2 className="text-lg font-bold mb-4">Feeds</h2>
          <ul className="space-y-5">
            {feeds.map((feed, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${feed.bg}`}
                  >
                    {feed.icon}
                  </div>
                  <p className="text-sm text-gray-700">{feed.text}</p>
                </div>
                <span className="text-sm text-gray-400">{feed.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
