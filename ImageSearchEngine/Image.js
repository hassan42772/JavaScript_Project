let serachbox = document.querySelector(".search-box");
let searchform = document.querySelector("form"); // Assuming the form has class searchform
let searchbtn = document.querySelector(".search-btn");
let gallery = document.querySelector(".search-img");
let showbtn = document.querySelector(".show-more-btn");

let page = 1;
let Accesskey = "X1Vexn5UWbvyHY75YwPcz2ux6Kddo-0Gp9YrTzOxW5E";
let keyword = "";

async function getImages(query) {
    keyword = serachbox.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${Accesskey}&per_page=12`;
    let response = await fetch(url);
    let data = await response.json();
    let result = data.results;
    console.log(result);
    result.forEach((image) => {
        // Create elements
        let img = document.createElement("img");
        img.src = image.urls.small;
        img.alt = "Image"; // For accessibility

        let imglink = document.createElement("a");
        imglink.href = image.links.html;
        imglink.target = "_blank";
        imglink.appendChild(img); // Append image to link

        let downloadBtn = document.createElement("button");
        downloadBtn.classList.add("download-btn");
        downloadBtn.innerHTML = '<i class="fas fa-download"></i>';
        
        // Set up the button to trigger image download
        downloadBtn.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevents the click event from bubbling up to the link
            window.open(image.links.download, "_blank"); // Open the download link
        });

        // Create a container for the image and button
        let container = document.createElement("div");
        container.classList.add("image-container");
        container.appendChild(imglink); // Add the link (with image) to the container
        container.appendChild(downloadBtn); // Add the download button to the container

        gallery.appendChild(container); // Add the container to the gallery
    });
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    gallery.innerHTML = "";
    showbtn.style.display = "block";
    getImages();
});

showbtn.addEventListener("click", () => {
    page++;
    getImages();
});
