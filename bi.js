// Save Basic Info Data
document.getElementById('basic-info-form')?.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Get form values
    const qualification = document.getElementById('qualification').value;
    const state = document.getElementById('state').value;
    const siblings = document.getElementById('siblings').value;
    const position = document.getElementById('position').value;

    // Store values in localStorage
    localStorage.setItem('qualification', qualification);
    localStorage.setItem('state', state);
    localStorage.setItem('siblings', siblings);
    localStorage.setItem('position', position);

    // Display saved values in the basic info display section
    document.getElementById('display-qualification').textContent = qualification;
    document.getElementById('display-state').textContent = state;
    document.getElementById('display-siblings').textContent = siblings;
    document.getElementById('display-position').textContent = position;

    // Hide the form and show the basic info display section
    document.getElementById('basic-info-form').style.display = 'none';
    document.getElementById('basic-info-display').style.display = 'block';

    // Replace 'Save' button with 'Change'
    document.getElementById('save-basic-info').textContent = 'Change';
});

// Load basic info data on page load
function loadBasicInfoData() {
    const qualification = localStorage.getItem('qualification');
    const state = localStorage.getItem('state');
    const siblings = localStorage.getItem('siblings');
    const position = localStorage.getItem('position');

    if (qualification && state && siblings && position) {
        document.getElementById('display-qualification').textContent = qualification;
        document.getElementById('display-state').textContent = state;
        document.getElementById('display-siblings').textContent = siblings;
        document.getElementById('display-position').textContent = position;

        document.getElementById('basic-info-form').style.display = 'none';
        document.getElementById('basic-info-display').style.display = 'block';
    }
}

// Enable Basic Info Edit Mode
function enableBasicInfoEdit() {
    // Hide basic info display and show form again
    document.getElementById('basic-info-display').style.display = 'none';
    document.getElementById('basic-info-form').style.display = 'block';

    // Populate the form fields with previously stored values
    document.getElementById('qualification').value = localStorage.getItem('qualification');
    document.getElementById('state').value = localStorage.getItem('state');
    document.getElementById('siblings').value = localStorage.getItem('siblings');
    document.getElementById('position').value = localStorage.getItem('position');

    // Replace 'Change' with 'Save'
    document.getElementById('save-basic-info').textContent = 'Save';
}

// Load stored profile picture, profile data, and basic info data on page load
window.onload = function() {
    loadProfilePic();
    loadProfileData();
    loadBasicInfoData();
};
