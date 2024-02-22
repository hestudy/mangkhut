import { useBoolean, useUpdateEffect } from "ahooks";
import { TreeData } from "../types";
import { FolderIcon } from "./icons/FolderIcon";
import { RightIcon } from "./icons/RightIcon";
import { useSpring, animated } from "@react-spring/web";

const TreeComponent = ({
  data,
  level = 0,
}: {
  data: TreeData[];
  level?: number;
}) => {
  return (
    <div>
      {data.map((item) => {
        return <TreeItem item={item} level={level}></TreeItem>;
      })}
    </div>
  );
};

export default TreeComponent;

const TreeItem = ({ item, level = 0 }: { item: TreeData; level?: number }) => {
  const [open, openAc] = useBoolean(false);
  const [spring, api] = useSpring(() => {
    return {
      from: {
        display: "none",
      },
    };
  });

  useUpdateEffect(() => {
    if (open) {
      api.start({
        from: {
          display: "none",
        },
        to: {
          display: "block",
        },
      });
    } else {
      api.start({
        from: {
          display: "block",
        },
        to: {
          display: "none",
        },
      });
    }
  }, [open]);

  return (
    <div>
      <div
        className="flex items-center mb-2 py-2 px-2 space-x-1 cursor-pointer hover:bg-gray-100 select-none"
        style={{
          paddingLeft: `${level * 20}px`,
        }}
      >
        <RightIcon
          fontSize={18}
          className={`text-gray-600 ${
            item.children.length !== 0 ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            if (item.children.length !== 0) {
              openAc.toggle();
            }
          }}
        ></RightIcon>
        <FolderIcon fontSize={18} className="text-gray-600"></FolderIcon>
        <div className="text-sm">{item.title}</div>
      </div>
      <animated.div
        style={{
          ...spring,
        }}
      >
        <TreeComponent data={item.children} level={level + 1} />
      </animated.div>
    </div>
  );
};
