function ClashCalculation(sbp,scp,scc,ss,ebp,ecp,ecc,es)
{
    alert("ClashCalculation")

    for (let i = 0; i<scc; i++)
    {
        
    }
}
function test(){
    alert("Hello")
}



window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("Submitter").addEventListener("click", (event) => {
    let Sform = new FormData(document.getElementById('SinnerForm'));
    let Eform = new FormData(document.getElementById('EnemyForm'));
    
    sbp = Sform.get(sbp)
    scp = Sform.get(scp)
    scc = Sform.get(scc)
    ss = Sform.get(ss)
    ebp = Eform.get(ebp)
    ecp = Eform.get(ecp)
    ecc = Eform.get(ecc)
    es = Eform.get(es)

    ClashCalculation(sbp,scp,scc,ss,ebp,ecp,ecc,es);
    });
})