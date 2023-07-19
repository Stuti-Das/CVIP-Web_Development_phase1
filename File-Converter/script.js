const textarea = document.querySelector("textarea");
fileNameInput = document.querySelector(".file-name input");
selectMenu = document.querySelector(".save-as select");
saveBtn = document.querySelector(".save-btn");
selectMenu.addEventListener("change", () => {
    //getting selected option text
   const selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedFormat.split(" ")[0]} File`;
});

saveBtn.addEventListener("click", () =>{
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    //URL.createObjectURL creates an URL that represents passed object
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");// creating <a> tag
    link.download = fileNameInput.value; // passing fileName as download value of link
    link.href = fileUrl; // pasing fileUrl as href value of link
    link.click(); // clicking link so that the file can be downloaded
});
