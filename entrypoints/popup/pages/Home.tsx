import { useRequest } from "ahooks";

const Home = () => {
  useRequest(async () => {
    const tabs = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });
    const tab = tabs[0];
    if (tab) {
      console.log(tab);
    }
  });

  return (
    <div className="w-[800px] h-[600px] flex">
      <div className="w-[280px] border-r border-dashed">demo</div>
      <div className="flex-1 w-0"></div>
    </div>
  );
};

export default Home;
