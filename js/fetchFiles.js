// This function is not used.
// It can't function. For academic reasons only
// It can run only on servers such as live server on VS Code
function fetchFiles(dir, fileType) {
  //dir: directory of the files you want to fetch
  //fileType: any fileType is valid. "image" is also valid as an argument
  if (fileType === "image") {
    fileTypeRegEx = new RegExp(/\.(jpe?g|png|gif)$/);
  } else {
    fileTypeRegEx = new RegExp(fileType);
  }
  if (dir[0] == "/") {
    dir = dir.substring(1);
  }
  if (dir[dir.length - 1] == "/") {
    dir = dir.substring(0, dir.length - 1);
  }
  let images = [];
  let dirRegEx = new RegExp(dir + "/[^.]+");
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "document";
    xhr.open("GET", dir, true);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status === 200) {
        var elements = xhr.responseXML.getElementsByTagName("a");
        for (x of elements) {
          if (x.href.match(fileTypeRegEx)) {
            images.push({
              name: x.href
                .match(dirRegEx)
                .toString()
                .substring(dir.length + 1),
              url: x.href
            });
          }
        }
        resolve(images);
      } else {
        reject("Request failed. Returned status of " + xhr.status);
      }
    };
  });
}
