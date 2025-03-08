let diemToan = Number(prompt("hay nhap diem mon toan"));
let diemVan = Number(prompt("hay nhap diem mon van"));
let diemSu = Number(prompt("hay nhap diem su"));
//tinh diem trung binh cho ba mon hoc
let diemTb =(diemToan + diemVan + diemSu) / 3;
console.log(" diem trung binh cua ba mon hoc bang " + diemTb.toFixed(2));