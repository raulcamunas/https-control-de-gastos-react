import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";
import { ChangeEvent } from "react";

export default function FilterByCategory() {

  const {dispatch} = useBudget()
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({type: 'add-filter-category', payload: {id: e.target.value}})
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-10">
      <form>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <label htmlFor="ategory">Filtrar Gastos</label>
          <select
            id="category"
            className="bg-slate-100 p-3 flex-1 rounded"
            onChange={handleChange}
          >
            <option>-- Todas las Categorias --</option>
            {categories.map(category => (
              <option
                value={category.id}
                key={category.id}
              >
                {category.name}
                </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  )
}
