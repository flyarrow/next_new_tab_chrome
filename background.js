console.log("后台脚本已加载");

let lastActiveTabId = null;

chrome.tabs.onActivated.addListener((activeInfo) => {
  console.log("标签页激活:", activeInfo);
  lastActiveTabId = activeInfo.tabId;
});

chrome.tabs.onCreated.addListener((newTab) => {
  console.log("新标签页创建:", newTab);

  if (lastActiveTabId) {
    chrome.tabs.get(lastActiveTabId, (lastActiveTab) => {
      if (chrome.runtime.lastError) {
        console.error("获取上一个活动标签页时出错:", chrome.runtime.lastError);
        return;
      }

      const newIndex = lastActiveTab.index + 1;
      console.log("尝试将新标签页移动到索引:", newIndex);

      chrome.tabs.move(newTab.id, {index: newIndex}, (movedTab) => {
        if (chrome.runtime.lastError) {
          console.error("移动标签页时出错:", chrome.runtime.lastError);
        } else {
          console.log("标签页已成功移动到索引:", movedTab.index);
        }
      });
    });
  } else {
    console.log("没有上一个活动标签页的记录");
  }
});