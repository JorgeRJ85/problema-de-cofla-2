// Lista de Alumnos y asitencias por 30 dias
//////////////////////////////////////////

// let cantidad =prompt("¿Cuantos alumnos son?");

// let alumnosTotales=[];

// for (let i = 0; i < cantidad; i++) {
//     //Array dentro dentro array 
//     alumnosTotales[i]=[prompt("Nombre del Alumno: "+ (i+1)),0];
    
// };

// const tomarAsistencia=(nombre,p)=>{
//     let presencia= prompt(nombre).toLowerCase();
    
//     if(presencia=="p"){
//       alumnosTotales[p][1]++;   
//     };
// };

// for (let i = 0; i < 30 ; i++) {
//     for(alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0],alumno);
//     }
// }
 
// for (alumno in alumnosTotales) {
//     let resultado= `${alumnosTotales[alumno][0]}:<br> 
//     _____________Presentes=${alumnosTotales[alumno][1]} <br>
//     _____________Ausentes=${30- alumnosTotales[alumno][1]} `
//     if (30-alumnosTotales[alumno][1]>18) {
//         resultado+= "<b> Reprobado por INASISTENCIAS </b> <br><br>"
//     };
//     document.write(resultado);
// }