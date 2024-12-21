
    const grades = [];

    function submitGrades() {
      const mathInput = document.getElementById("math");
      const englishInput = document.getElementById("english");
      const math = parseFloat(mathInput.value);
      const english = parseFloat(englishInput.value);

      if (!isNaN(math) && !isNaN(english)) {
        const average = ((math + english) / 2).toFixed(2);
        grades.push({ math, english, average: parseFloat(average) });

        updateTable();
        mathInput.value = "";
        englishInput.value = "";
      } else {
        alert("請輸入有效的數學和英文成績");
      }
    }

    function updateTable() {
      const gradesBody = document.getElementById("gradesBody");
      gradesBody.innerHTML = "";
      let totalMath = 0;
      let totalEnglish = 0;
      let totalAverage = 0;

      grades.forEach((grade, index) => {
        totalMath += grade.math;
        totalEnglish += grade.english;
        totalAverage += grade.average;

        const row = `
          <tr>
            <td>${index + 1}</td>
            <td>${grade.math}</td>
            <td>${grade.english}</td>
            <td>${grade.average}</td>
          </tr>
        `;
        gradesBody.innerHTML += row;
      });

      const mathAverage = (totalMath / grades.length).toFixed(2);
      const englishAverage = (totalEnglish / grades.length).toFixed(2);
      const overallAverage = (totalAverage / grades.length).toFixed(2);

      document.getElementById("mathAverage").textContent = mathAverage;
      document.getElementById("englishAverage").textContent = englishAverage;
      document.getElementById("overallAverage").textContent = overallAverage;
    }