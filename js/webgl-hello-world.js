const canvas=document.querySelector('canvas');
const gl=canvas.getContext('webgl');

const program=gl.createProgram();

const vertexShader=gl.createShader(gl.VERTEX_SHADER);
const fragmentShader=gl.createShader(gl.FRAGMENT_SHADER);

const vShaderSource=`
    attribute vec2 position;
    void main(){
        gl_PointSize=20.0;
        gl_Position=vec4(position/2.0,0,1);
    }
`;
const fShaderSource=`
    void main(){
        gl_FragColor=vec4(1,0,0,1)
    }
`;

// gl.shaderSource(vertexShader,vShaderSource);
// gl.compileShader(vertexShader)

// console.log(gl.getShaderInfoLog(vertexShader)); // if it is an empty string,everything is good

function compileShader(shader,source){
    gl.shaderSource(shader,source);
    gl.compileShader(shader);
    const log=gl.getShaderInfoLog(shader);
    if(log){
        throw new Error(log)
    }
}
compileShader(vertexShader,vShaderSource);
compileShader(fragmentShader,fShaderSource);

gl.attachShader(program,vertexShader);
gl.attactShader(program,fragmentShader);

gl.linkProgram(program);
gl.useProgram(program);
const positionPointer=gl.getAttribLocation(program,'position');
// const positionData=new Float32Array([0,0]);
const positionData=new Float32Array([
    -1.0, // point 1 x
    -1.0, // point 1 y
 
    1.0, // point 2 x
    1.0, // point 2 y

    -1.0, // point 3 x
    1.0, // point 3 y

    1.0, // point 4 x
    -1.0, // point 4 y    
])
const positionBuffer=gl.createBuffer(gl.ARRAY_BUFFER);
gl.bindBuffer(gl.ARRAY_BUFFER,positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER,positionData,gl.STATIC_DRAW);
const attributeSize=2;
const type=gl.FLOAT;
const nomralized=false;
const stride=0;
const offset=0;
gl.enableVertexAttribArray(positionPointer);
gl.vertexAttribPointer(positionPointer,attributeSize,type,nomralized,stride,offset);
// gl.drawArrays(gl.POINTS,0,1)
gl.drawArrays(gl.POINTS,0,positionData.length/2)