const resumeLink = document.getElementById('resumeLink');

resumeLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Open the resume file in a new window
    const resumeFilePath = 'Jack_Mangione_Resume.pdf';
    window.open(resumeFilePath, '_blank');
});