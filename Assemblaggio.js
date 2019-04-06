//mesh di base
var cube_geo = new THREE.BoxGeometry(1,1,1);
var cube_mat = new THREE.MeshPhongMaterial();
var cube = new THREE.Mesh( cube_geo, cube_mat );
cube.castShadow = true;
cube.receiveShadow = true;

//var nos_cube_mat = new THREE.MeshBasicMaterial();
var nos_cube = new THREE.Mesh( cube_geo, cube_mat );

var basic_cube_mat = new THREE.MeshBasicMaterial();
var basic_cube = new THREE.Mesh( cube_geo, basic_cube_mat );


//colori
var white = new THREE.Color("hsl(0, 100%, 100%)");
var light_brown = new THREE.Color("hsl(40, 83%, 64%)");
var grey = new THREE.Color("hsl(60, 30%, 40%)");
var dark_brown = new THREE.Color("hsl(40, 93%, 40%)");
var dark_dark_brown = new THREE.Color("hsl(40, 93%, 25%)");
var black = new THREE.Color("hsl(0, 100%, 0%)");
var dark_red = new THREE.Color("hsl(0, 100%, 20%)");
var green = new THREE.Color("hsl(90, 100%, 20%)");
var green_bis = new THREE.Color("hsl(90, 100%, 25%)");
var green_ter = new THREE.Color("hsl(90, 100%, 30%)");

//funzione che clona il cubo di base con il suo materiale e lo colora
function CreaCuboColorato(cube, colour){
    var coloured_cube = cube.clone();
    coloured_cube.traverse((node) => { //per clonare anche il materiale
        if (node.isMesh) {
          node.material = node.material.clone();
        }
    });
    coloured_cube.material.color.set(colour);
    return coloured_cube;
}

//funzione di assemblaggio //molto inefficiente
function Assembla(map, obj, group){
	for(i=0; i<map.length; i++){
		for(j=0; j<map[i].length; j++){
			for(k=0; k<map[i][j].length; k++){
                if(map[i][j][k]!=0){
                    var obj2 = obj[map[i][j][k]-1].clone();
                    obj2.position.set(j,i,k);
                    group.add(obj2);
                }
            }
		}
	}
	return group;
}

//nuvola
var nuvola = new THREE.Object3D();
nuvola = Assembla(nuvola_map, [CreaCuboColorato(nos_cube, white)], nuvola);
nuvola.position.set(15,50,10);
nuvola.scale.multiplyScalar(4);

//chiocciola
var chiocciola = new THREE.Object3D();
var corpo = new THREE.Object3D();
var occhi = new THREE.Object3D();
var guscio = new THREE.Object3D();
var bocca = new THREE.Object3D();
var asse_chiocciola = new THREE.Vector3(0,0,1); // direzioni relative per muovere occhi e guscio

corpo = Assembla(corpo_map, [CreaCuboColorato(cube, light_brown)], corpo);
guscio = Assembla(guscio_map, [
    CreaCuboColorato(cube, dark_brown), 
    CreaCuboColorato(cube, dark_dark_brown)], guscio);
guscio.position.set(0,1,1);
var pos_guscio = new THREE.Vector3(0,1,1); // posizione di riferimento per guscio

var occhio1 = CreaCuboColorato(cube,white);
    occhio1.scale.multiplyScalar(1.2);
    occhio1.position.x=-1;
var pupilla1 = CreaCuboColorato(cube,black);
    pupilla1.castShadow = false;
    pupilla1.receiveShadow = false;
    pupilla1.scale.multiplyScalar(.5);
    pupilla1.position.set(-1,0,.4);
var occhio2 = occhio1.clone();
    occhio2.position.x=1;
var pupilla2 = pupilla1.clone();
    pupilla2.position.set(1,0,.4);
occhi.add(occhio1,occhio2,pupilla1,pupilla2);
occhi.position.set(1,1.5,6);
var pos_occhi = new THREE.Vector3(1,1.5,6); // posizione di riferimento per occhi

bocca = Assembla(bocca_map, [CreaCuboColorato(nos_cube,dark_red)], bocca);
bocca.scale.multiplyScalar(.1);
bocca.rotation.y = Math.PI/2;
bocca.position.set(.3,.2,6.5);

chiocciola.add(corpo, guscio, occhi, bocca, asse_chiocciola);
chiocciola.position.set(8,.5,-10);

// siepe
var siepe = new THREE.Object3D();
siepe = Assembla(siepe_map, [
    CreaCuboColorato(nos_cube,green),
    CreaCuboColorato(nos_cube,green_bis),
    CreaCuboColorato(nos_cube,green_ter)
], siepe);
siepe.rotation.y = Math.PI/2;
siepe.position.set(-8,2,30);
siepe.scale.multiplyScalar(4);

//muro
var muro = new THREE.Object3D();
muro = Assembla([[[1],[1]]], [CreaCuboColorato(cube,grey)], muro);
muro.scale.multiplyScalar(30);
muro.position.set(6,15,45);

// piede
var piede = new THREE.Object3D();
piede = Assembla(piede_map, [CreaCuboColorato(nos_cube, dark_dark_brown)], piede);
piede.scale.multiplyScalar(3);
piede.position.set(0,60,-60);

