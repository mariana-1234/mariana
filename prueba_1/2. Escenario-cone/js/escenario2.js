//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color();

var loader = new THREE.TextureLoader();
loader.load('./imagenes/fondo2.jpg', function(texture) {
    scene.background = texture;
})

//camaras
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//geometrias
const geometry = new THREE.ConeGeometry(5, 20, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xE8513F});
const cone = new THREE.Mesh(geometry, material);
scene.add(cone);

//posición
camera.position.z = 20;

//animación
function animate() {
    requestAnimationFrame(animate);
    cone.rotation.y += 0.03;
    cone.rotation.z += 0.02;
    renderer.render(scene, camera);
}
animate();

//linear fog