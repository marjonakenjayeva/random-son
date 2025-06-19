alert("Sizda hozir random sonlar chiqiwni boshledi")

let random_son = Math.floor(Math.random() *100)
alert("Random orqali chiqan son: " + random_son)

let con = confirm("Biz random soni 2 kopaytirmoqchi va bolmoqchimiz")

if (con){
 alert(`
Random orqali chiqan son: ${random_son}
Biz uni 2 ga kopaytirib ${random_son *2} sonini chiqardik
va shu soni 2 ga bolib ${random_son /2} sonini chiqardik
va shu soni 3 ga bolgandagi qoldiq ${random_son %3} sonini chiqardik
 `)
}
else{
}

alert("Sizda hozir random sonlar chiqshni noshledi")

let random_son2 = Math.floor(Math.random() *100)
alert("Random orqali chiqan son: " + random_son2)

let con2 = confirm("Biz random soni 2 ga kopaytirmoqchi va bolmoqchimiz")

if (con2){
alert(`
Random orqali chiqan son ${random_son2}
Biz uni 2 ga kopaytirib ${random_son2 *2} sonini chiqardik
va uni 2 ga bolib ${random_son2 /2} sonini ciqardik
va wu soni 3ga bolgandagi qoldiq ${random_son2 %2} chiqadik
`)
}
else{
}
