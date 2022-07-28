function handleFormSubmit(e) {
    e.preventDefault();
    // console.log(e.target);
    const Age = document.getElementById("age").value;
    const Gender = document.getElementById("gender").value;
    const SystolicBP = document.getElementById("sBP").value;
    const DiastolicBP = document.getElementById("dBP").value;
    const GlucoseLevel = document.getElementById("glevel").value;
    const CholesterolLevel = document.getElementById("clevel").value;
    const Diabetes = document.getElementById("diabetes").value;
    const CigarPerDay = document.getElementById("cpd").value;
    const PrevalentHypertensive = document.getElementById("ph").value;
    const BPMedication = document.getElementById("bpm").value;

    const data = {
        sysBP: SystolicBP,
        glucose: GlucoseLevel,
        age: Age,
        cigsPerDay: CigarPerDay,
        totChol: CholesterolLevel,
        diaBP: DiastolicBP,
        prevalentHyp: PrevalentHypertensive,
        male: Gender,
        BPMeds: BPMedication,
        diabetes: Diabetes
    };
    console.log(data);

    const url = "http://127.0.0.1:5000/predict?"

    fetch(url, {
  method: 'POST',
  headers: {
    // 'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(res => console.log(res));

}

/* document.getElementById("predict-btn").addEventListener("click", function () {
    handleFormSubmit();
}); */
