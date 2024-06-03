import { useEffect, useState } from "react";
import { API } from "../../consts/api";

function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        let allCategories = [];
        let current = 1;
        let next = true;

        while (next) {
          const response = await fetch(`${API}/category?page=${current}`);

          const { data, currentPage, nextPage } = await response.json();
          allCategories = [...allCategories, ...data];

          current = currentPage + 1;
          next = current <= nextPage;
          setCategories(allCategories);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div>
      <h1>Categories</h1>
      {loading ? (
        <>loading...</>
      ) : (
        <div>
          <form>
            <label>Select an option</label>
            <select multiple id="categories">
              <option selected>Choose countries</option>
              {categories?.map((category) => (
                <option key={category.id} value={category.name} name="category">
                  {category.name}
                </option>
              ))}
            </select>
          </form>
        </div>
      )}
    </div>
  );
}

export default Category;
