document.getElementById('questionnaire-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const answer1 = document.getElementById('question1').value;
    const answer2 = document.getElementById('question2').value;
    const answer3 = document.getElementById('question3').value;

    // Store answers in localStorage
    localStorage.setItem('serviceYears', answer1);
    localStorage.setItem('rank', answer2);
    localStorage.setItem('specialization', answer3);

    alert('Questionnaire submitted successfully!');

    // Redirect to another page if needed or simply refresh
});
