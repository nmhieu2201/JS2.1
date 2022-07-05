//Bài 1:
/**
 * Input: Điểm chuẩn, Điểm 3 môn, khu vực ưu tiên.(a,b,c,x), đối tượng dự thi.(1,2,3,0);
 * Process:  ;
 * Output:Tổng điểm, log ra thí sinh đậu hay trật ;
 */
//Tính điểm ưu tiên theo khu vực:
//Nhận vào khu vực:=>Điểm ưu tiên.
function calcAreaGrade(area) {
    if (area === "A") {
      return 2;
    }
    if (area === "A") {
      return 1;
    }
    if (area === "A") {
      return 0.5;
    } else {
      return 0;
    }
  }
  //TÍnh điểm ưu tiên theo đối tượng.
  //Nhận vào đối tượng => Điểm ưu tiên
  function calcStudentTypeGrade(type) {
    if (type === "1") {
      return 2.5;
    }
    if (type === "2") {
      return 1.5;
    }
    if (area === "3") {
      return 1;
    } else {
      return 0;
    }
  }
  function ex1() {
    var standardGrade = 23;
    var sub1 = 0;
    var sub2 = 9;
    var sub3 = 10;
    var area = "A";
    var studentType = "2";
    //Tính điểm ưu tiên theo khu vực
    var areaGrade = calcAreaGrade(area);
    //Tính điểm ưu tiên theo đối tượng
    var areaTypeGrade = calcStudentTypeGrade(studentType);
    var totalPoint = sub1 + sub2 + sub3 + areaGrade + areaTypeGrade;
    if (totalPoint >= standardGrade && sub1 > 0 && sub2 > 0 && sub3 > 0) {
      console.log("Thí sinh đậu", totalPoint);
    } else {
      console.log("Thí sinh rớt", totalPoint);
    }
  }
  ex1();
  //Bài 2:
  function bill() {
    var kW = 450;
    var billEletronic;
    if (kW <= 50) {
      billEletronic = kW * 500;
    } else if (kW <= 100) {
      billEletronic = 50 * 500 + (kW - 50) * 650;
    } else if (kW <= 200) {
      billEletronic = 50 * 500 + 50 * 650 + (kW - 100) * 850;
    } else if (kW <= 350) {
      billEletronic = 50 * 500 + 50 * 650 + 100 * 850 + (kW - 200) * 1100;
    } else {
      billEletronic =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kW - 350) * 1300;
    }
    console.log("Tien dien can tra: ", billEletronic);
  }
  bill();