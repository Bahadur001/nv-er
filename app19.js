// let date = new Date("03-23-2021");
// let colors = ['red', 'blue', 'yellow', 'green',];
// let reng = 0;

// setInterval(() => {
//     let now = new Date();
//     let between = now - date;
//     let gun = Math.trunc(between / (1000 * 60 * 60 * 24));
//     let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
//     let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
//     let saniye = Math.trunc((between / 1000) % 60);
//     console.clear();
//     console.log(`%c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`, `color:${colors[reng]}`);
//     reng = (reng + 1) % colors.length;
// }, 1000);





// let students = [
//     {
//         id:1,
//         Name: "Bahadur" ,
//         Surname: "Novruzov",
//         Age:21,
//         Country:  "Azerbaijan",
//         Point: 60
//     },
//     {
//         id:2,
//         Name: "Nicat" ,
//         Surname: "Memmedov",
//         Age:23,
//         Country:  "USA",
//         Point: 80
//     },
//     {
//         id:3,
//         Name: "Rasim" ,
//         Surname: "Suleymanov",
//         Age:33,
//         Country:  "Rusia",
//         Point: 70
//     },
//     {
//         id:4,
//         Name: "Namiq" ,
//         Surname: "Quliyev",
//         Age:41,
//         Country:  "Turkey",
//         Point: 40
//     },
//     {
//         id:5,
//         Name: "Gunay" ,
//         Surname: "Hesenova",
//         Age:26,
//         Country:  "Azerbaijan",
//         Point: 90
//     },
//     {
//         id:6,
//         Name: "Malik" ,
//         Surname: "Necefov",
//         Age:21,
//         Country:  "Turkey",
//         Point: 100
//     },
 
// ]
// let name = prompt("telbenin adin gir ");
// let student = students.find((item) => {
//     return item.Name.toLowerCase() === name.toLowerCase();
// });
// if (student) {
//     console.log(`${student.Name} ${student.Surname} ${student.Age} ${student.Country} ${student.Point}`);
// } else {
//     console.log("tapilmadi.");
// }



// let soz = prompt("soz gir ");


