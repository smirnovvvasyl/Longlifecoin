import { useState } from 'react';
import Icon from './icons';

interface Props {
  name: string;
  content: string;
  expanded: boolean;
}

export function Accordion({ name, content, expanded }: Props) {
  const [opened, setOpened] = useState<boolean>(expanded);
  return (<div className="border-b border-light">
    <div className="flex items-center justify-between bg-light-50 cursor-pointer pr-15 overflow-hidden" onClick={() => setOpened(!opened)}>
      <div className="flex-grow px-2 md:px-4 text-light-50 text-2xl font-bold">{name}</div>
      <Icon className={"delay-300 transform transition ease-out " + (opened ? " rotate-180" : "")} name="chevron" color="grey" size={24} />
    </div>
    <div className={"px-10 overflow-hidden md:px-50 py-2 text-gray-300 font-semibold transform transition ease-out " + (opened ? " max-h-500 opacity-100 py-25" : "max-h-0 opacity-0")} dangerouslySetInnerHTML={{ __html: content }} />
  </div>);
}

Accordion.defaultProps = {
  expanded: false,
}
