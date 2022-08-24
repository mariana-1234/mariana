//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color();

var loader = new THREE.TextureLoader();
loader.load('./imagenes/fondo.jpg', function(texture) {
    scene.background = texture;
})

//camaras
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//geometrias
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x46B1DB });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//posición
camera.position.z = 5;

//animación
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.02;
    cube.rotation.x += 0.03;
    renderer.render(scene, camera);
}
animate();