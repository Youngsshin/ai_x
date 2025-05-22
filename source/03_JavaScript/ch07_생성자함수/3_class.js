class Student{
    constructor(name, kor, mat, eng, sci){
        this.name = name;
        this.kor = kor;
        this.mat = mat;
        this.eng = eng;
        this.sci = sci;
    }
    getSum(){
        return this.kor + this.mat + this.eng + this.sci;
    }
    getAvg(){
        return this.getSum() / 4;
    }
    toString(){
        return 'name : ' + this.name +
                ' kor : ' + this.kor +
                ' mat : ' + this.mat +
                ' eng : ' + this.eng +
                ' sci : ' + this.sci + 
                ' sum : ' + this.getSum() +
                ' avg : ' + this.getAvg();
    }
} // class 
var hong = new Student('홍', 100, 100, 99, 90);
console.log(hong.toString());
console.log(`${hong}`);
console.log(hong); // 자동 템플릿 리터럴이 호출