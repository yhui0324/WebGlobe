///<amd-module name="world/ShaderContent"/>

const vsShader = 
`
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;  
varying vec2 vTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

void main()
{
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition,1.0);
    vTextureCoord = aTextureCoord;
}
`;

const fsShader = 
`
#ifdef GL_ES
precision highp float;
#endif

uniform bool uUseTexture;
uniform float uShininess;
uniform vec3 uLightDirection;

uniform vec4 uLightAmbient;
uniform vec4 uLightDiffuse;
uniform vec4 uLightSpecular;

varying vec2 vTextureCoord;  
uniform sampler2D uSampler;

void main()
{
    gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
}
`;


export = {
  SIMPLE_SHADER: {
    VS_CONTENT: vsShader,
    FS_CONTENT: fsShader
  }
};