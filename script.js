document.addEventListener('DOMContentLoaded', (event) => {
    updateCredits();
});

function updateCredits() {
    const numSemesters = parseInt(document.getElementById('numSemesters').value);
    const defaultCredits = [24, 24, 24, 25, 24, 24, 24, 24];
    const selectedCredits = defaultCredits.slice(0, numSemesters);
    document.getElementById('credits').value = selectedCredits.join(', ');
}

function calculateCGPA() {
    const sgpas = document.getElementById('sgpas').value.split(',').map(Number);
    const credits = document.getElementById('credits').value.split(',').map(Number);

    if (sgpas.length !== credits.length) {
        alert("The number of SGPAs and credits must be the same.");
        return;
    }

    let totalWeightedPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < sgpas.length; i++) {
        totalWeightedPoints += sgpas[i] * credits[i];
        totalCredits += credits[i];
    }

    const cgpa = totalWeightedPoints / totalCredits;
    const percentage = (cgpa - 0.5) * 10;

    document.getElementById('cgpa').innerText = cgpa.toFixed(2);
    document.getElementById('percentage').innerText = percentage.toFixed(2);
}
