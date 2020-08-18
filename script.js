import * as $ from '//unpkg.com/three@0.118.3/build/three.module.js'
import { OrbitControls } from '//unpkg.com/three@0.118.3/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from '//unpkg.com/three@0.118.3/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from '//unpkg.com/three@0.118.3/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from '//unpkg.com/three@0.118.3/examples/jsm/postprocessing/UnrealBloomPass'

// ----
// Boot
// ----

const renderer = new $.WebGLRenderer({ antialias: true });
const scene = new $.Scene();
const camera = new $.PerspectiveCamera(75, 2, 0.1, 100);
const controls = new OrbitControls(camera, renderer.domElement);
const composer = new EffectComposer(renderer);
const res = new $.Vector2();
window.addEventListener('resize', () => {
    const { clientWidth, clientHeight } = renderer.domElement;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(clientWidth, clientHeight, false);
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    composer.setPixelRatio(window.devicePixelRatio);
    composer.setSize(clientWidth, clientHeight);
    renderer.getDrawingBufferSize(res);
});
document.body.prepend(renderer.domElement);
window.dispatchEvent(new Event('resize'));
renderer.setAnimationLoop(t => {
    composer.render();
    controls.update();
});

// ----
// Main
// ---- 

// #2374C6, #C20F00, #FFDD22, #FFFFFF, and #000000

const BLUEISH = '#2374C6';
const REDISH = '#C20F00';
const YELLOWISH = '#FFDD22';
const BLACK = '#000000';
const WHITE = '#FFFFFF';
const SIZE = 1;

scene.background = new $.Color(BLUEISH);
camera.position.set(0, 8, 0);

renderer.shadowMap.enabled = true;

const light = new $.DirectionalLight(WHITE, 1.5);
light.position.set(2, 1, -1);
light.castShadow = true;
light.shadow.camera.near = .1;
light.shadow.camera.far = 20;
light.shadow.mapSize.set(1024, 1024);
light.shadow.bias = -0.005;
scene.add(light);

//// Ground

const g = new $.BoxBufferGeometry(100, 0.001, 100, 100, 1, 100);
const mat = new $.ShadowMaterial({ color: BLACK });
const mesh = new $.Mesh(g, mat);
mesh.position.y = -SIZE / 2;
mesh.receiveShadow = true;
scene.add(mesh);

//// Box

class Box {
    constructor(color, size) {
        this.size = size;
        this.mat = this.buildMaterial(color);
        this.pivot = {};
        this.mesh = this.buildBox();
    }
    buildPivot(name, w, h, d, x, y, z, pvx, pvy, pvz) {
        const mesh = new $.Mesh(new $.BoxBufferGeometry(w, h, d), this.mat);
        mesh.position.set(x, y, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        const pivot = new $.Mesh();
        pivot.position.set(pvx, pvy, pvz);
        pivot.add(mesh);
        this.pivot[name] = pivot;
        return pivot;
    }
    buildMaterial(color) {
        return new $.MeshLambertMaterial({ color, transparent: true });
    }
    buildBox() {
        const SZ = this.size;
        const S = SZ / 2; // box half size
        const T = SZ / 100; // thickness
        const root = new $.Mesh();
        root.add(this.buildPivot("right", T, SZ, SZ, 0, S, 0, S, -S, 0));
        root.add(this.buildPivot("left", T, SZ, SZ, 0, S, 0, -S, -S, 0));
        root.add(this.buildPivot("back", SZ, SZ, T, 0, S, 0, 0, -S, -S));
        const front = this.buildPivot("front", SZ, SZ, T, 0, S, 0, 0, -S, S);
        root.add(front);
        const top = this.buildPivot("top", SZ, T, SZ, 0, 0, -S, 0, S * 2, 0);
        front.add(top);
        const bottom = this.buildPivot("bottom", SZ, T, SZ, 0, -S, 0, 0, 0, 0);
        root.add(bottom);
        return root;
    }
    animate(duration) {
        return new Promise((onComplete) => {
            const defaults = {
                ease: 'bounce'
            };
            gsap.timeline({ onComplete, defaults, repeat: -1 })
                .addLabel("❤")
                .to(this.pivot.front.rotation, { x: Math.PI, duration })
                .to(this.pivot.top.rotation, { x: Math.PI, duration }, "❤")
                .to(this.pivot.right.rotation, { z: -Math.PI, duration }, "❤")
                .to(this.pivot.left.rotation, { z: Math.PI, duration }, "❤")
                .to(this.pivot.back.rotation, { x: -Math.PI, duration }, "❤")
                .to(this.mesh.position, { y: this.size, duration, ease: 'elastic' }, "❤");
        });
    }
}

//// Make Boxes

(async function () {
    const colors = [YELLOWISH, REDISH, WHITE];
    const map = [
         "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 0 0 0 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 1 1 1 0 0 0 1 1 0 0 0 1 1 0 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 1 1 1 0 0 1 1 0 0 1 1 1 0 0 1 1 1 0 0 0 0 1 1 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 1 1 0 0 0 1 1 1 0 0 0 1 1 0 0 1 1 1 0 0 0 0 0 1 1 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 1 1 0 0 0 0 0 1 1 0 0 0 1 1 0 0 1 1 0 0 0 1 1 0 0 1 1 0 0 0 0 0 0",
"0 0 0 0 0 0 0 1 1 0 1 0 0 0 1 1 1 0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 0 1 1 0 0 0 0 0",
"0 0 0 0 0 0 1 1 0 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 1 0 0 0 0 0",
"0 0 0 0 0 0 1 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 1 1 0 0 0 0",
"0 0 0 0 0 1 1 0 0 0 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1 0 0 0 0",
"0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 1 0 0 0",
"0 0 0 0 1 1 0 1 1 0 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 0 1 1 1 1 0 0 1 0 0 0",
"0 0 0 0 1 1 0 1 1 1 1 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0",
"0 0 0 0 1 1 0 1 1 1 1 0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0",
"0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 1 1 1 1 0 0 0 0 0 0 0 0 1 0 1 1 0 0",
"0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 0 1 1 1 1 0 0 0 0 0 1 1 1 1 0 1 1 0 0",
"0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 0 1 1 1 1 0 0 0 0 0 1 1 1 1 0 1 1 0 0",
"0 0 0 0 1 1 0 1 1 1 1 0 0 0 0 0 1 1 1 1 0 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 1 1 0 0",
"0 0 0 0 1 1 0 1 1 1 1 0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0",
"0 0 0 0 1 1 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0",
"0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 1 1 1 1 0 0 1 0 0 0",
"0 0 0 0 0 1 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 1 0 0 0",
"0 0 0 0 0 1 1 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1 0 0 0 0",
"0 0 0 0 0 0 1 0 0 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 1 1 0 0 0 0",
"0 0 0 0 0 0 1 1 0 1 1 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 1 0 0 0 0 0",
"0 0 0 0 0 0 0 1 1 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 1 1 0 0 0 0 0",
"0 0 0 0 0 0 0 0 1 0 0 0 0 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 1 1 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 1 1 0 0 0 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 1 1 1 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 0 1 1 0 0 1 0 0 0 0 1 1 1 0 0 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",

    ];
    const pattern = new $.Mesh();
    const Z = map.length;
    const X = map[0].split(' ').length;
    for (const [z, row] of map.entries()) {
        for (let [x, v] of row.split(' ').entries()) {
            v = Number(v);
            if (v) {
                const box = new Box(colors[v - 1], SIZE);
                box.mesh.position.set(x * SIZE, 0, z * SIZE);
                pattern.add(box.mesh);
                box.animate(Math.random() * 2 + 1);
            }
        }
    }
    pattern.position.x = pattern.position.z = -SIZE * map.length / 2;
    scene.add(pattern);
}());

//// PostProcessing

const renderPass = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(res, .4, 1, 0.38);
composer.addPass(renderPass);
composer.addPass(bloomPass);