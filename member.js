function skillsMember() {
  // This function is called when the page is loaded
  // It gets the data from the user's local storage
  // and displays it on the page
  var skills = localStorage.getItem('skills');
  if (skills) {
    var skillsList = JSON.parse(skills);
    var skillsListHTML = '';
    for (var i = 0; i < skillsList.length; i++) {
      skillsListHTML += '<li>' + skillsList[i] + '</li>';
    }
    document.getElementById('skillsList').innerHTML = skillsListHTML;
  }
}