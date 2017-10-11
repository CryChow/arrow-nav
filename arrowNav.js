/**
 * 箭头组导航封装
 * @param divId 导航容器id
 * @param array 箭头组数组
 */
function arrowNav(array){
    this.render(array);
}

/**
 * 根据箭头组数组初始化HTML
 * @returns {string}返回箭头组导航的HTML内容
 */
arrowNav.prototype.render = function(dataArr){
    var listsHTML = "";
    var isOnlyCurrent = 0;
    for(var i = 0;i<dataArr.length;i++) {
        if (dataArr[i]["isCurrentStatus"]){
            listsHTML += '<li class="current"><div></div>' + dataArr[i]["name"] + '<div></div></li>';
            isOnlyCurrent++;
        }
        else if (dataArr[i]["isShadowed"]){
            listsHTML += '<li class="shadowed"><div></div>' + dataArr[i]["name"] + '<div></div></li>';
        }
        else {
            listsHTML += '<li><div></div>' + dataArr[i]["name"] + '<div></div></li>';
        }
    }
    var ulHTML = '<ul class="arrow-nav">' + listsHTML + '</ul>';
    var navBox = document.getElementById("navBox");
    navBox.innerHTML = ulHTML;
    if(isOnlyCurrent === 1){
        var breakOffNode = document.createElement('div');
        breakOffNode.className = "break-off";
        breakOffNode.innerText = "已中止";
        navBox.appendChild(breakOffNode);
    }
};
