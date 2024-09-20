// Show success message
function showMessage() {
    alert("Thank you for visiting Sainik Mitra! More details coming soon.");
}

// Profile Picture Upload Functionality
function changeProfilePic(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageSrc = e.target.result;
            document.getElementById("display-pic").src = imageSrc;
            
            // Store the image in localStorage
            localStorage.setItem("profilePic", imageSrc);
        };
        reader.readAsDataURL(file);
    }
}

// Load the stored profile picture from localStorage
function loadProfilePic() {
    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
        document.getElementById("display-pic").src = savedPic;
    }
}

// Menu Toggle Functionality
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.style.left === '-250px') {
        sideMenu.style.left = '0';
    } else {
        sideMenu.style.left = '-250px';
    }
}

// Calculate age based on date of birth
function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Save Profile Data Function
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Calculate age from the date of birth
    const age = calculateAge(dob);

    // Store values in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('dob', dob);
    localStorage.setItem('age', age);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

    // Display saved values in the profile display section
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-dob').textContent = dob;
    document.getElementById('display-age').textContent = age;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-phone').textContent = phone;

    // Hide the form and show the profile display section
    document.getElementById('profile-form').style.display = 'none';
    document.getElementById('profile-display').style.display = 'block';

    // Replace 'Save' button with 'Change'
    document.getElementById('save-button').textContent = 'Change';
});

// Load profile data on page load
function loadProfileData() {
    const name = localStorage.getItem('name');
    const dob = localStorage.getItem('dob');
    const age = localStorage.getItem('age');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');

    if (name && dob && age && email && phone) {
        document.getElementById('display-name').textContent = name;
        document.getElementById('display-dob').textContent = dob;
        document.getElementById('display-age').textContent = age;
        document.getElementById('display-email').textContent = email;
        document.getElementById('display-phone').textContent = phone;

        document.getElementById('profile-form').style.display = 'none';
        document.getElementById('profile-display').style.display = 'block';
    }
}

// Enable Edit Mode Function
function enableEdit() {
    // Hide profile display and show form again
    document.getElementById('profile-display').style.display = 'none';
    document.getElementById('profile-form').style.display = 'block';

    // Populate form fields with previously stored values
    document.getElementById('name').value = localStorage.getItem('name');
    document.getElementById('dob').value = localStorage.getItem('dob');
    document.getElementById('email').value = localStorage.getItem('email');
    document.getElementById('phone').value = localStorage.getItem('phone');

    // Replace 'Change' with 'Save'
    document.getElementById('save-button').textContent = 'Save';
}

// Load stored profile picture and profile data on page load
window.onload = function() {
    loadProfilePic();
    loadProfileData();
};


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
