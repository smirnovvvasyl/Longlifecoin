import { TabOption } from '../types';


interface ITabs {
  options: TabOption[];
  selected: any;
  onChange: (value: any) => void;
}

function Tabs({ selected, options, onChange }: ITabs) {
  return <div className="flex overflow-x-auto pretty-scroll">
    {options.map(option => {
      const active = selected === option.value;
      return <div
        key={option.label}
        className={`border-b-2 text-center text-xl px-4 mx-2 cursor-pointer ${active ? 'text-white border-white' : 'text-gray-400 border-gray-400'}`}
        onClick={() => {
          onChange(option.value);
        }}
      >
        {option.label}
      </div>;
    })}
  </div>
}

export default Tabs;