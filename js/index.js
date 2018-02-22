/**
 * Created by 腾 on 2018/2/12.
 */
var nextBtn = document.getElementsByClassName('next-btn');
var prevBtn = document.getElementsByClassName('prev-btn');
var oBtn = document.getElementById('btn');
var oLi = oBtn.getElementsByTagName('li');
var ImgBox = document.getElementsByClassName('img-box')[0];
var oA=ImgBox.getElementsByTagName('a');
console.log(oA);
console.log(oLi);
for(var i=0;i<oLi.length;i++){
    oLi[i].index=i;
    oLi[i].onclick=function () {
        console.log(111);
        for(var j=0;j<oLi.length;j++){
            oLi[j].className='';
        }
        this.className='selected';
        oA[this.index].className='selected';
    }
}



console.log(nextBtn);