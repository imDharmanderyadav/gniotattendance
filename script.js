

let login =  document.getElementById("login");

function redirectToAttendance() {
    var password = document.getElementById("pass").value;
    
    // Replace 'YOUR_SERVER_URL' with the actual server URL where you handle password validation
    var serverUrl = 'http://gnioterp.com:150';
    
    // http://gnioterp.com:150/StudentAcademicReportMgmt.aspx?StuId=73991&SessionId=1022&ClassId=31&SemId=61

    // Redirect to the attendance page with the password as a parameter
    window.location.href = serverUrl + '/StudentAcademicReportMgmt.aspx?StuId=' + encodeURIComponent(password)+'&SessionId=1023&ClassId=32&SemId=63';
}

login.addEventListener("click", (e)=>{
    e.preventDefault();
    redirectToAttendance();
});