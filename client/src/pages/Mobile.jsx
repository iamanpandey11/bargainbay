import React, { useState, useEffect } from "react";
import { TextInput, Button, Select } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";

function Mobile() {
  const [mobiles, setMobiles] = useState([]);
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const urlParams = new URLSearchParams(location.search);
        const response = await fetch(`/api/mobile/get?${urlParams.toString()}`);
        if (!response.ok) throw new Error("Network error");

        const data = await response.json();
        setMobiles(data[0].posts);
      } catch (error) {
        console.error("Error fetching mobile data:", error);
        setMobiles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.search]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSidebarData({ ...sidebarData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    Object.entries(sidebarData).forEach(([key, value]) => {
      urlParams.set(key, value);
    });
    navigate(`/api/mobile/get?${urlParams.toString()}`);
  };

  return (
    <>
      <div className="">
        <div className="p-7 border-b md:border-r  border-red-500">
          <form className="flex justify-evenly gap-8" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <label className="whitespace-nowrap font-semibold">
                Search Term:
              </label>
              <TextInput
                placeholder="Search..."
                id="searchTerm"
                type="text"
                value={sidebarData.searchTerm}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-semibold">Sort:</label>
              <Select
                onChange={handleChange}
                value={sidebarData.sort}
                id="sort"
              >
                <option value="desc">Latest</option>
                <option value="asc">Oldest</option>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <label className="font-semibold">Category:</label>
              <Select
                onChange={handleChange}
                value={sidebarData.category}
                id="category"
              >
                <option value="uncategorized">Uncategorized</option>
                <option value="ios">Ios</option>
                <option value="android">Android</option>
              </Select>
            </div>
            <Button type="submit" outline gradientDuoTone="purpleToPink">
              Apply Filters
            </Button>
          </form>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-800 dark:text-gray-200">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mobiles.map((mobile) => (
            <div
              key={mobile._id}
              className="border rounded-lg overflow-hidden shadow-lg dark:bg-gray-800 dark:text-gray-200"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=${mobile.model}`}
                alt={mobile.model}
                className="w-full"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{mobile.model}</h2>
                <p className="text-gray-800 dark:text-gray-200">
                  Brand: {mobile.brand_name}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  Price: {mobile.price}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  Average Rating: {mobile.avg_rating}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  Processor Speed: {mobile.processor_speed} GHz
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  Battery Capacity: {mobile.battery_capacity} mAh
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  RAM Capacity: {mobile.ram_capacity} GB
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  Internal Memory: {mobile.internal_memory} GB
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  Screen Size: {mobile.screen_size} inches
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  OS: {mobile.os}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  Primary Camera (Rear): {mobile.primary_camera_rear} MP
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  Primary Camera (Front): {mobile.primary_camera_front} MP
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  Resolution: {mobile.resolution_width} x{" "}
                  {mobile.resolution_height}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Mobile;
