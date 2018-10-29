  let changeColor = document.getElementById('button');

  changeColor.onclick = function(element) {
    console.log(element);
    console.log('qwe')

    let params = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      console.log(tabs);
        chrome.tabs.sendMessage(tabs[0].id, {txt: 'Hi'})
    }

    // let color = element.target.value;
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //   chrome.tabs.executeScript(
    //       tabs[0].id,
    //       {code: 'document.body.style.backgroundColor = "' + color + '";'});
    // });
  };