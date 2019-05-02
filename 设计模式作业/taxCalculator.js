//每月减除费用 
//三险一金
//专项扣除
function getTax(month, income, startPoint, insuranceFee, specialFee) {
    let incomeToTex = (income - startPoint - insuranceFee - specialFee) * month;
    let calculator = chosse(incomeToTex);
    return calculator(incomeToTex);
}
function mode1(incomeToTex,month){
    return incomeToTex*3% - 0 - getTax(month-1);
}
function mode2(incomeToTex,month){
    return incomeToTex*10% -2520 - getTax(month-1);
}
function mode3(incomeToTex,month){
    return incomeToTex*20% -16920 - getTax(month-1);
}

function mode4(incomeToTex,month){
    return incomeToTex*25% -31920 - getTax(month-1);
}

function mode5(incomeToTex,month){
    return incomeToTex*30% -52920 - getTax(month-1);
}

function mode6(incomeToTex,month){
    return incomeToTex*35% -85920 - getTax(month-1);
}
function mode7(incomeToTex,month){
    return incomeToTex*45% -181920 - getTax(month-1);
}
function choose(){
    
}


