import { ReactNode } from "react";

type ListProps<T> = {
  list: T[];
  onClick: (value: T) => void;
};

const List = <T extends { name: string }>({ list, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {list.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item.name as ReactNode}
          </div>
        );
      })}
    </div>
  );
};

export default List;
