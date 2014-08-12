
//一鍵上傳戰報至信喵交易所 by SantosLiu @ 2013/06/24

function uploadBattle(info)
{
	var battleUrl = info.linkUrl;
	battleUrl = battleUrl.replace("%3D","");	
	
	if (battleUrl.indexOf("86game") != -1){
		battleUrl = battleUrl.replace("http://nyashindig.86game.com/battle/replay.htm?id=","");		
		chrome.tabs.create({url: "http://cat.gameimp.net/cn/battlemovielist.php?serial=" + battleUrl})	
	} else if (battleUrl.indexOf("wasabii") != -1){
		battleUrl = battleUrl.replace("http://nyashindig.wasabii.com.tw/battle/replay.htm?id=","");		
		chrome.tabs.create({url: "http://cat.gameimp.net/battlemovielist.php?serial=" + battleUrl})	
	}		
}

chrome.contextMenus.create({title: "上傳戰報", contexts:["link"], onclick: uploadBattle});
