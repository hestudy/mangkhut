import { useBoolean } from "ahooks";
import { TreeData } from "../types";
import { FolderIcon } from "./icons/FolderIcon";
import { RightIcon } from "./icons/RightIcon";

const TreeComponent = ({
  data,
  level = 0,
}: {
  data: TreeData[];
  level?: number;
}) => {
  const [open, openAc] = useBoolean(level === 0 ? true : false);

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div
              className="flex items-center mb-2 py-2 px-2 space-x-1 cursor-pointer hover:bg-gray-100"
              style={{
                paddingLeft: `${level * 20}px`,
              }}
            >
              <RightIcon
                fontSize={18}
                className={`text-gray-600 ${
                  item.children.length !== 0 ? "opacity-100" : "opacity-0"
                }`}
              ></RightIcon>
              <FolderIcon fontSize={18} className="text-gray-600"></FolderIcon>
              <div className="text-sm">{item.title}</div>
            </div>
            <div>
              <TreeComponent data={item.children} level={level + 1} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TreeComponent;
