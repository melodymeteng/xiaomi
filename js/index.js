/**
 * Created by 腾 on 2018/2/12.
 */
var nextBtn = document.getElementsByClassName('next-btn')[0];
var prevBtn = document.getElementsByClassName('prev-btn')[0];
var oBtn = document.getElementById('btn');
var oLi = oBtn.getElementsByTagName('li');
var ImgBox = document.getElementsByClassName('img-box')[0];
var oA=ImgBox.getElementsByTagName('a');
var iNow=0;
console.log(oA);
console.log(oLi);
for(var i=0;i<oLi.length;i++){
    oLi[i].index=i;
    oLi[i].onclick=function () {
        iNow=this.index;
        changImg(this.index)
    };
    nextBtn.onclick=function () {
        iNow++;
        if(iNow==oA.length){
            iNow=0;
        }
        changImg(iNow);
    };
    prevBtn.onclick=function () {
        iNow--;
        if(iNow==-1){
            iNow=oA.length-1;
        }
        changImg(iNow);
    };
    function changImg(idx) {
        for(var j=0;j<oLi.length;j++){
            oLi[j].className='';
            oA[j].className='';
        }
        oLi[idx].className='selected';
        oA[idx].className='selected';
    }
}
var iBack=document.getElementsByClassName('icon-back')[1];
var iMore=document.getElementsByClassName('icon-gengduo')[11];
var pList=document.getElementsByClassName('pro-ul')[0];
iMore.onclick=function () {
    pList.style.left='-1240'+'px';
    iMore.classList.remove('icon-active');
    iBack.classList.add('icon-active')
};
iBack.onclick=function () {
    pList.style.left=0;
   iBack.classList.remove('icon-active');
    iMore.classList.add('icon-active');

};


