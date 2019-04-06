var nuvola_map = [[
    [0,0,0,1,0],
    [0,1,1,1,1],
    [1,1,1,1,1],
    [0,0,0,1,1]
]];

var corpo_map = [[
    [1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1]
]];

var guscio_map = [  // 2 mesh
    [
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ],[
        [1,2,1],
		[1,0,1],
		[1,2,1]
    ],[
        [1,1,1],
		[1,1,1],
		[1,1,1]
    ]
];

var bocca_map = [[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]];

var siepe_length = 30;
var siepe_width = 15;
var siepe_map = [...Array(10)].map(e => [...Array(siepe_length)].map(e => Array(siepe_width).fill(0)));
for(i=0; i<8; i++) {
    for(h=0; h<5+THREE.Math.randInt(0,5); h++){
        siepe_map[h][i][0] = THREE.Math.randInt(1,3);
    }
    for(h=0; h<THREE.Math.randInt(0,5); h++){
        siepe_map[h][i][1] = THREE.Math.randInt(1,3);
    } 
}
for(j=0; j<8; j++) {
    for(h=0; h<5+THREE.Math.randInt(0,5); h++){
        siepe_map[h][8+j][j] = THREE.Math.randInt(1,3);
    }
    for(h=0; h<THREE.Math.randInt(0,4); h++){
        siepe_map[h][7+j][j] = THREE.Math.randInt(1,3);
    } 
}

var piede_map = [[
    [0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0]
]];