document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    let CMAppZipFilePath =
      "/calcul-mental-app-route/CMApp-app-folder/Calcul mental App - Dev V2.zip";

    let filename = CMAppZipFilePath.split("/").pop();

    let link = document.createElement("a");
    link.href = CMAppZipFilePath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  });
