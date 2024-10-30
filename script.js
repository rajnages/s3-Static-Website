// Add functionality to the contact form (optional)
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset(); // Reset the form after submission
});
function toggleFilter(filterId) {
    const filterOptions = document.getElementById(filterId);
    filterOptions.style.display = filterOptions.style.display === 'block' ? 'none' : 'block';
}

let activeFilters = {
    type: [],
    status: []
};

function filterProjects(filterValue) {
    const filterType = ['AWS', 'Mobile', 'Marketing', 'Completed', 'In Progress'];
    
    // Check if the filter is already active
    if (filterType.includes(filterValue)) {
        if (activeFilters.type.includes(filterValue)) {
            activeFilters.type = activeFilters.type.filter(item => item !== filterValue);
        } else {
            activeFilters.type.push(filterValue);
        }
    }

    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const projectType = project.getAttribute('data-type');
        const projectStatus = project.getAttribute('data-status');
        
        const typeMatch = activeFilters.type.length ? activeFilters.type.includes(projectType) : true;
        const statusMatch = activeFilters.status.length ? activeFilters.status.includes(projectStatus) : true;

        // Show the project if it matches the filters
        if (typeMatch || statusMatch) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

function resetFilters() {
    activeFilters.type = [];
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.style.display = 'block'; // Reset to show all projects
    });
}
