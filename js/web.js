const nameM1 = "Doctila";
const nameM2 = "Kramp";
const nameM3 = "Loys";
const nameM4 = "Nubia";
const nameM5 = "Markel";
const nameM6 = "Cyra";
const nameM7 = "Carnage";
let attackPlayer;
let attackEnemy;
let avatarPlayer;
let avatarEnemy;
let firstOpen = 0;
let topHeight = 0;
let topInner = 0;

let playerLife = 3;
let enemyLife = 3;

function startGame(){
    const btMascotaPlayer = document.getElementById
    ("bt-select-avatar");
    const btFuego = document.getElementById("bt-fuego");
    const btAgua = document.getElementById("bt-agua");
    const btTierra = document.getElementById("bt-tierra");
    btMascotaPlayer.addEventListener("click", selectMascotaPlayer);

    const input1 = document.getElementById("M1");
    const input2 = document.getElementById("M2");
    const input3 = document.getElementById("M3");
    const input4 = document.getElementById("M4");
    const input5 = document.getElementById("M5");
    const input6 = document.getElementById("M6");
    const input7 = document.getElementById("M7");

    input1.addEventListener("click", setMascota1);
    input2.addEventListener("click", setMascota2);
    input3.addEventListener("click", setMascota3);
    input4.addEventListener("click", setMascota4);
    input5.addEventListener("click", setMascota5);
    input6.addEventListener("click", setMascota6);
    input7.addEventListener("click", setMascota7);

    btAgua.addEventListener("click", attackAgua)
    btTierra.addEventListener("click", attackTierra)
    btFuego.addEventListener("click", attackFuego)

    document.getElementById("select-ataque").style.display = "none"
    document.getElementById("battle-messages").style.display = "none"
 
}
function setMascota1 (){
    avatarPlayer = nameM1;
}
function setMascota2 (){
    avatarPlayer = nameM2;
}
function setMascota3 (){
    avatarPlayer = nameM3;
}
function setMascota4 (){
    avatarPlayer = nameM4;
}
function setMascota5 (){
    avatarPlayer = nameM5;
}
function setMascota6 (){
    avatarPlayer = nameM6;
}
function setMascota7 (){
    avatarPlayer = nameM7;
}

function selectMascotaPlayer(){
    if (!avatarPlayer == ""){
        document.getElementById("select-ataque").style.display = ""
        document.getElementById("battle-messages").style.display = ""

        topHeight = document.body.scrollHeight;    
        topInner = window.innerHeight;

        if (scrollY + topInner != topHeight || firstOpen == 0){
            window.scroll(0, document.body.scrollHeight)
            firstOpen = 1;
        }
        
        const mascota1 = document.getElementById("M1");
        const mascota2 = document.getElementById("M2");
        const mascota3 = document.getElementById("M3");
        const mascota4 = document.getElementById("M4");
        const mascota5 = document.getElementById("M5");
        const mascota6 = document.getElementById("M6");
        const mascota7 = document.getElementById("M7");
        let spMyMascota = document.getElementById("sp-myM");
        let spLifeMascota = document.getElementById("sp-pLife");
        spLifeMascota.innerHTML = playerLife;

        if(mascota1.checked){
            spMyMascota.innerHTML = nameM1;
            hideAttackOne();
            selectMascotaEnemy(randomNumber(1,7))
        } else if (mascota2.checked){
            spMyMascota.innerHTML = nameM2;
            hideAttackTwo();
            selectMascotaEnemy(randomNumber(1,7))
        } else if (mascota3.checked){
            spMyMascota.innerHTML = nameM3;
            hideAttackThree();   
            selectMascotaEnemy(randomNumber(1,7))
        } else if (mascota4.checked){
            spMyMascota.innerHTML = nameM4;
            hideAttackFour();
            selectMascotaEnemy(randomNumber(1,7))
        } else if (mascota5.checked){
            spMyMascota.innerHTML = nameM5;
            hideAttackFive();
            selectMascotaEnemy(randomNumber(1,7))
        } else if (mascota6.checked){
            spMyMascota.innerHTML = nameM6;
            hideAttackSix();
            selectMascotaEnemy(randomNumber(1,7))
        } else if (mascota7.checked){
            spMyMascota.innerHTML = nameM7;
            hideAttackSeven();
            selectMascotaEnemy(randomNumber(1,7))
        }
    } else {
        alert("Debe seleccionar alguna mascota para el combate");
    }
}
function hideAttackOne(){
    document.getElementById("bt-agua").style.display = "none"

    document.getElementById("bt-fuego").style.display = ""
    document.getElementById("bt-tierra").style.display = ""
    
}
function hideAttackTwo(){
    document.getElementById("bt-fuego").style.display = "none"
    document.getElementById("bt-agua").style.display = "none"

    document.getElementById("bt-tierra").style.display = ""
}

function hideAttackThree (){
    document.getElementById("bt-fuego").style.display = "none"

    document.getElementById("bt-tierra").style.display = ""
    document.getElementById("bt-agua").style.display = ""

}
function hideAttackFour (){
    document.getElementById("bt-tierra").style.display = "none"

    document.getElementById("bt-fuego").style.display = ""
    document.getElementById("bt-agua").style.display = ""

}
function hideAttackFive (){
    document.getElementById("bt-tierra").style.display = "none"
    document.getElementById("bt-agua").style.display = "none"

    document.getElementById("bt-fuego").style.display = ""

}
function hideAttackSix (){
    document.getElementById("bt-tierra").style.display = "none"
    document.getElementById("bt-fuego").style.display = "none"

    document.getElementById("bt-agua").style.display = ""

}
function hideAttackSeven (){
    document.getElementById("bt-tierra").style.display = ""
    document.getElementById("bt-fuego").style.display = ""
    document.getElementById("bt-agua").style.display = ""

}

function selectMascotaEnemy(mascota){
    let spEnemyMascota = document.getElementById("sp-enemyM");
    let spEnemyLife = document.getElementById("sp-eLife");
    spEnemyLife.innerHTML = enemyLife;
    if (mascota == 1){
        spEnemyMascota.innerHTML = nameM1;
        avatarEnemy = nameM1;
    } else if (mascota == 2){
        spEnemyMascota.innerHTML = nameM2
        avatarEnemy = nameM2;
    } else if (mascota == 3){
        spEnemyMascota.innerHTML = nameM3
        avatarEnemy = nameM3;
    } else if (mascota == 4){
        spEnemyMascota.innerHTML = nameM4
        avatarEnemy = nameM4;
    } else if (mascota == 5){
        spEnemyMascota.innerHTML = nameM5
        avatarEnemy = nameM5;
    } else if (mascota == 6){
        spEnemyMascota.innerHTML = nameM6
        avatarEnemy = nameM6;
    } else if (mascota == 7){
        spEnemyMascota.innerHTML = nameM7
        avatarEnemy = nameM7;
    }
}

function testAlert(){
    alert("Prueba")
}

function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function attackTierra (){
    attackPlayer = "TIERRA"
    attackEnemy = attackEnemySelect();
    resolveBattle()
}

function attackAgua (){
    attackPlayer = "AGUA"
    attackEnemy = attackEnemySelect();
    resolveBattle()
}

function attackFuego (){
    attackPlayer = "FUEGO"
    attackEnemy = attackEnemySelect();
    resolveBattle()
}

function attackEnemySelect(){
    let ataque;
    if (avatarEnemy == nameM1){
        ataque = randomNumber(1,2)
        if (ataque == 1){
            return "FUEGO"
        } else if (ataque == 2){
            return "TIERRA"
        }
    } else if (avatarEnemy == nameM2){
        return "TIERRA"
    } else if (avatarEnemy == nameM3){
        ataque = randomNumber(1,2)
        if (ataque == 1){
            return "AGUA"
        } else if (ataque == 2){
            return "TIERRA"
        }
    } else if (avatarEnemy == nameM4){
        ataque = randomNumber(1,2)
        if (ataque == 1){
            return "FUEGO"
        } else if (ataque == 2){
            return "AGUA"
        }
    } else if (avatarEnemy == nameM5){
        return "FUEGO"
    } else if (avatarEnemy == nameM6){
        return "AGUA"
    }
}

function resolveBattle(){
    let spBattle = document.getElementById("sp-battle");
    spBattle.innerHTML = "NUEVA BATALLA"
    checkingScrollBottom();
    setTimeout( (event) =>{
        spBattle.innerHTML = "Calculando resultado."    
    },500)
    setTimeout( (event1) =>{
        spBattle.innerHTML = "Calculando resultado.."    
    },1000)
    setTimeout( (event2) =>{
        spBattle.innerHTML = "Calculando resultado..."    
    },1500)
    setTimeout( (event3) =>{
        if (attackEnemy == attackPlayer){       
            spBattle.innerHTML = "Atacaste con " + attackPlayer + "<br>El enemigo te atac贸 con " + attackEnemy + "<br>HAN EMPATADO馃";
        } else if (attackPlayer == "FUEGO" && attackEnemy == "TIERRA"){
            spBattle.innerHTML = "Est谩s atacando con " + attackPlayer + "<br>El enemigo te atac贸 con " + attackEnemy + "<br>BIEN HECHO GANASTE馃帀";
            enemyLife--
        } else if (attackPlayer == "AGUA" && attackEnemy == "FUEGO"){
            spBattle.innerHTML = "Est谩s atacando con " + attackPlayer + "<br>El enemigo te atac贸 con " + attackEnemy + "<br>BIEN HECHO GANASTE馃帀";
            enemyLife--
        } else if (attackPlayer == "TIERRA" && attackEnemy == "AGUA"){
            spBattle.innerHTML = "Est谩s atacando con " + attackPlayer + "<br>El enemigo te atac贸 con " + attackEnemy + "<br>BIEN HECHO GANASTE馃帀";
            enemyLife--
        } else {
            spBattle.innerHTML = "Est谩s atacando con " + attackPlayer + "<br>El enemigo te atac贸 con " + attackEnemy + "<br>HAS PERDIDO ESTA BATALLA馃槩";
            playerLife--
        }
        checkingScrollBottom();
        checkingBattle();
    }
        ,1800)
}
function checkingScrollBottom(){
    topHeight = document.body.scrollHeight;    
    topInner = window.innerHeight;
    if (scrollY + topInner != topHeight){
        window.scroll(0, document.body.scrollHeight)
    }
}
function checkingBattle (){
    let spBattle = document.getElementById("sp-battle");
    let selectAtaque = document.getElementById("select-ataque");
    if (playerLife == 0){
        deletePlayer();
        spBattle.innerHTML = "TE HAS QUEDADO SIN VIDAS <br> Tu avatar " + avatarPlayer + " ha sido derrotado."
        avatarPlayer = "";
        playerLife = 3;
        enemyLife = 3;
        selectAtaque.style.display = "none";
        checkingScrollBottom();
    } else if (enemyLife == 0){
        spBattle.innerHTML = "BIEN HECHO HAS DERROTADO A TU ENEMIGO"
        avatarPlayer = "";
        playerLife = 3;
        enemyLife = 3;
        selectAtaque.style.display = "none";
    } else{
        selectMascotaEnemy(randomNumber(1,7));
        let spEnemyLife = document.getElementById("sp-eLife");
        let spLifeMascota = document.getElementById("sp-pLife");
    
        spLifeMascota.innerHTML = playerLife;
        spEnemyLife.innerHTML = enemyLife;
    }


}

function deletePlayer(){
    if (avatarPlayer == nameM1){
        document.getElementById("main-avatar-1").style.display = "none"
    } else if (avatarPlayer == nameM2){
        document.getElementById("main-avatar-2").style.display = "none"
    } else if (avatarPlayer == nameM3){
        document.getElementById("main-avatar-3").style.display = "none"
    } else if (avatarPlayer == nameM4){
        document.getElementById("main-avatar-4").style.display = "none"
    } else if (avatarPlayer == nameM5){
        document.getElementById("main-avatar-5").style.display = "none"
    } else if (avatarPlayer == nameM6){
        document.getElementById("main-avatar-6").style.display = "none"
    } else if (avatarPlayer == nameM7){
        document.getElementById("main-avatar-7").style.display = "none"
    } 
}


window.addEventListener("load", startGame)
