let webpUrl = null;
let imageInfo = null;
let fileName = null;
let fileInput = document.getElementById('fileInput');
let webpContainer = document.getElementById('webpContainer');
let fileNameElement = document.getElementById('fileName');
let imageInfoElement = document.getElementById('imageInfo');
let downloadBtn = document.getElementById('downloadBtn');

function triggerFileInput() {
    fileInput.click();
}

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
        fileName = file.name;
        fileNameElement.querySelector('p').textContent = `文件名称：${fileName}`;
        fileNameElement.style.display = 'block';
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const image = new Image();
            image.onload = function() {
                imageInfo = {
                    width: image.width,
                    height: image.height
                };
                imageInfoElement.querySelector('p:nth-child(2)').textContent = `宽度: ${imageInfo.width} px`;
                imageInfoElement.querySelector('p:nth-child(3)').textContent = `高度: ${imageInfo.height} px`;
                imageInfoElement.style.display = 'block';
                
                convertToWebP(image);
            };
            image.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert("请选择 PNG 或 JPG 格式的图片");
    }
});

function convertToWebP(image) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    const webp = canvas.toDataURL('image/webp');
    webpUrl = webp;
    
    const imgElement = document.createElement('img');
    imgElement.src = webp;
    imgElement.alt = "WebP Image";
    imgElement.className = "webp-image";
    webpContainer.innerHTML = '';
    webpContainer.appendChild(imgElement);
    
    downloadBtn.style.display = 'block';
}

function downloadWebP() {
    if (webpUrl && fileName) {
        const link = document.createElement('a');
        link.href = webpUrl;
        const fileNameParts = fileName.split('.');
        const newFileName = fileNameParts.slice(0, -1).join('.') + '.webp';
        link.download = newFileName;
        link.click();
    }
}