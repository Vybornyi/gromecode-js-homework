const addImage = (imgSrc) => {
  const imgElemPromise = new Promise((resolved, rejected) => {

    const imgElem = document.createElement('img');
    imgElem.setAttribute('src', imgSrc);
    imgElem.setAttribute('alt', 'My photo');
    const page = document.querySelector('.page');
    page.append(imgElem);
    const onLoadedImg = () => {
      const { width, height } = imgElem;
      resolved({ width, height });
    };
    imgElem.addEventListener('load', onLoadedImg);
    imgElem.addEventListener('error', () => rejected(new Error('Image load is failed')));
  });
  return imgElemPromise;
};
const result = addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
);
result.then(data => console.log(data));
console.log(result);