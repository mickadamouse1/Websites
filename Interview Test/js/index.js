window.onload = () => {

    const photoGallery = document.getElementById("section-photo-gallery");
    const largeImgWindow = document.getElementById("large-image-window");
    const galleryPreviewImg = document.getElementById("group-secondary-images").children;
    const galleryImg = document.getElementById("group-photos").children;
    
    
    // loops through each preview image and adds onclick events which open the photo gallery
    for (let i = 0; i < galleryPreviewImg.length; i++) {
        galleryPreviewImg[i].addEventListener('click', () => {
            photoGallery.style.top = window.pageYOffset.toString() + "px";
            photoGallery.style.display = "flex";
            console.log(window.pageYOffset);
        });
    }

    // adds onlcick events for each photo in the photo gallery which opens their full view version
    for (let i = 0; i < galleryImg.length; i++) {
        galleryImg[i].addEventListener('click', () => {
            largeImgWindow.style.display = "flex";
            shader.style.zIndex = "1";
        });
        
    }
}