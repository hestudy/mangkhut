import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@shadcn/components/ui/resizable";
import { useRequest } from "ahooks";
import { useAtomValue } from "jotai";
import userAtom from "../atoms/user";
import { Avatar, AvatarImage } from "@shadcn/components/ui/avatar";
import { client, endpoint } from "../client";
import { graphql } from "@shadcn/gql";

const Collection = graphql(`
  query Collection($sort: [String]) {
    collection(sort: $sort) {
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

const Home = () => {
  const user = useAtomValue(userAtom);

  useRequest(async () => {
    const res = await client.request(Collection, {
      sort: ["sort", "-date_updated", "-date_created"],
    });
    if (res.collection) {
      return res.collection;
    }
  });

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
              <div className="h-full overflow-y-auto">
                <div className="h-[1000px]">demo</div>
              </div>
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
