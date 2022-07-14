
//Bài 1:Quản lý tuyển sinh
//Nhận vào khu vực ==> điểm ưu tiên
function calcAreaGrade(area){
    if(area ==="A"){
        return 2;
    } 
    if(area ==="B"){
        return 1;
    } 
    if(area ==="C"){
        return 0.5;
    } 
    return 0;
}

function calcStudentTypeGrade(type){
    if(type ===1){
        return 2.5;
    }
    if(type ===2){
        return 1.5;
    } 
    if(type ===3){
        return 1;
    } 
    return 0; 
}
function ex1(){
    //code logic kiểm tra thí sinh đậu hay rớt!
    var standardGrade = 23;
    var sub1 = 6;
    var sub2 = 9;
    var sub3 = 7;
    var area = 'A';
    var studentType = '1';

//tính điểm ưu tiên theo khu vực
    var areaGrade = calcAreaGrade(area);
//tính điểm ưu tiên theo đối tượng
   var studentTypeGrade = calcStudentTypeGrade(studentType);

   var totalGrade = sub1 + sub2 + sub3 + areaGrade +studentTypeGrade;
   if (totalGrade >= standardGrade && sub1 > 0 && sub2 > 0 && sub3 > 0){
    console.log("Đậu",totalGrade);
   }else {console.log("rớt",totalGrade);}
    }
    ex1();


    //Bài 2 : Tính tiền điện
    function calctotalPrice(Kw){
        if (Kw <= 50){
            totalPrice = 500 * Kw;
        }else if (Kw <= 100){
            totalPrice = (500 * Kw) + ( Kw - 50 )*150;
        }else if (Kw <= 200){
            totalPrice = 50*500 + 50*650 + (Kw - 100)*850;
        }else if (Kw <= 350){
            totalPrice = 50*500 + 50*650 + 100*850 + (Kw - 200)*1100;
        }else {totalPrice=50*500 + 50*650 + 100*850 + 150*1100 + (Kw -350 )*1300}
    
        return totalPrice;
    }
        function ex2(){
            //tính tiền điện
            var name = "Nguyễn";
            var Kw = 300;
            var totalPrice;
            //tính tiền điện
        var totalPrice = calctotalPrice(Kw);
    console.log("tiền điện",totalPrice);
        }
        ex2();