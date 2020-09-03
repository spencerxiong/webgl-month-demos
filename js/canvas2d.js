const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');

// ctx.fillRect(0,0,100,50)


// function calculatePixelIndices(top,left,width,height){
//     const pixelIndices=[];
//     for(let x=left;x<left+width;x++){
//         for(let y=top;y<top+height;y++){
//             const i=y*canvas.width*4+x*4;
//             pixelIndices.push(i);
//         }
//     }
//     return pixelIndices;
// }

function fillRect(top,left,width,height){
    // 8位无符号整型数组存储颜色，长度是width*height*4，因为一个像素需要4个数组元素储存
    const pixelStore=new Uint8ClampedArray(width*height*4);
    // const pixelIndices=calculatePixelIndices(top,left,width,height);

    for(var i=0;i<pixelStore.length;i+=4){
    // pixelIndices.forEach((i)=>{   
        pixelStore[i]=0; //r
        pixelStore[i+1]=0; //g
        pixelStore[i+2]=0; //b
        pixelStore[i+3]=255; //alpha
    }
    //  })
    // 将数组转换为imageData
    const imageData=new ImageData(pixelStore,width,height);
    // ctx.putImageData(imageData,0,0)
    ctx.putImageData(imageData,left,top)
}

fillRect(30,10,100,50)