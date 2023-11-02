function changeAtiveTab(event,tabID){
    let element = event.target;
    while(element.nodeName !== "A"){
      element = element.parentNode;
    }
    ulElement = element.parentNode.parentNode;
    aElements = ulElement.querySelectorAll("li > a");
    tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");
    for(let i = 0 ; i < aElements.length; i++){
      aElements[i].classList.remove("text-white");
      aElements[i].classList.remove("bg-orange-600");
      aElements[i].classList.add("text-orange-600");
      aElements[i].classList.add("bg-gray-100");
      aElements[i].classList.add("dark:bg-gray-900");
      tabContents[i].classList.add("hidden");
      tabContents[i].classList.remove("block");
    }
    element.classList.remove("text-orange-600");
    element.classList.remove("bg-gray-100");
    element.classList.remove("dark:bg-gray-900");
    element.classList.add("text-white");
    element.classList.add("bg-orange-600");
    document.getElementById(tabID).classList.remove("hidden");
    document.getElementById(tabID).classList.add("block");
  }