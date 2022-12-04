function disablecontext(e) {
	var clickedEl = (e==null) ? event.srcElement.tagName : e.target.tagName;
	if (clickedEl == "IMG") {
		alert(errorMsg);
		return false;
	}
}
var errorMsg = "You Can't Download Content From This WebSite ";
document.oncontextmenu = disablecontext;

const img = document.querySelector('img')
img.ondragstart = () => {
  return false;
};
