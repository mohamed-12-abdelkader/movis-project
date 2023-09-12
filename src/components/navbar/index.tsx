import React from "react";
interface NavProps {
  onSearch: any;
}
const NavigationBar: React.FC<NavProps> = ({ onSearch }) => {
  const Search = (word: string) => {
    onSearch(word);
  };
  return (
    <nav
      className="bg-blue-500 p-4 fixed top-0 w-full "
      style={{ zIndex: "1000" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* شعار */}
        <div className="text-white text-2xl font-bold"> Movies</div>

        {/* حقل البحث */}
        <div className="w-80">
          <input
            onChange={(e) => Search(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-700"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
