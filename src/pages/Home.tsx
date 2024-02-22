import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/src/components/ui/resizable";
import { useRequest } from "ahooks";
import { useAtomValue } from "jotai";
import userAtom from "../atoms/user";
import { Avatar, AvatarImage } from "@/src/components/ui/avatar";
import { client, endpoint } from "../client";
import { graphql } from "@/src/gql";
import { useMemo } from "react";
import { CollectionQuery } from "../gql/graphql";
import { ScrollArea } from "../components/ui/scroll-area";
import { Loading } from "../components/Loading";
import Empty from "../components/Empty";
import { TreeData } from "../types";
import TreeComponent from "../components/TreeComponent";

const Collection = graphql(`
  query Collection($sort: [String]) {
    collection(sort: $sort, limit: -1) {
      title
      id
      sort
      parent {
        id
      }
      date_created
      date_updated
    }
  }
`);

const getTreeData = (
  data: CollectionQuery["collection"],
  parent?: string
): TreeData[] => {
  return data
    .filter((item) => item.parent?.id === parent)
    .map((item) => {
      return {
        ...item,
        children: getTreeData(data, item.id),
      };
    });
};

const Home = () => {
  const user = useAtomValue(userAtom);

  const { loading, data } = useRequest(async () => {
    const res = await client.request(Collection, {
      sort: ["sort", "-date_created"],
    });
    if (res.collection) {
      return res.collection;
    }
  });

  const treeData = useMemo(() => {
    if (data) {
      return getTreeData(data);
    }
  }, [data]);

  // useRequest(async () => {
  //   const tabs = await browser.tabs.query({
  //     active: true,
  //     currentWindow: true,
  //   });
  //   const tab = tabs[0];
  //   if (tab) {
  //     console.log(tab);
  //   }
  // });

  return (
    <div className="w-[800px] h-[600px]">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel maxSize={30} minSize={20}>
          <div className="h-full flex flex-col">
            <div className="border-b px-4 py-2 flex items-center">
              <Avatar className="mr-2">
                <AvatarImage
                  src={`${endpoint}/assets/${user?.avatar?.id}`}
                ></AvatarImage>
              </Avatar>
              <span className="truncate">{user?.title}</span>
            </div>
            <div className="flex-1 h-0">
              {loading && (
                <div className="h-full flex justify-center items-center">
                  <Loading></Loading>
                </div>
              )}
              {!loading && (
                <>
                  {(!treeData || treeData.length === 0) && <Empty></Empty>}
                  {treeData && treeData.length > 0 && (
                    <>
                      <ScrollArea className="h-full">
                        <TreeComponent data={treeData}></TreeComponent>
                      </ScrollArea>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle></ResizableHandle>
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Home;
