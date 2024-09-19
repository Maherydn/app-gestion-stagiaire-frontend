const FilterButton = ({ name, onClick, activeButton }) => {
  
  return (
    <>
        <button 
            className={`px-2 py-1 font-mono text-lg hover:border-b-2 hover:border-slate-700 text-slate-700 duration-50  ${activeButton === name && 'border-b-2 border-slate-700'}`}
            onClick={onClick}
            >{name}
        </button>
    </>
  )
}

export default FilterButton
