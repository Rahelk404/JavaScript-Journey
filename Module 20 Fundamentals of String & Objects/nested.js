const college = {
    name: 'VNC',
    class: ['11', '12'],
    events: ['science fair', 'Bijoy dibos', '21 feb'],
    unique:{
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

college.events[2] = '16 December';
college.unique.result.merit  = 'top top ghorar dim';
console.log(college.events[2]);
console.log(college);