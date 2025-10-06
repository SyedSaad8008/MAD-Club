// Events Data (from user-provided list)
const rawEventsData = [
    {
        title: "Inauguration of Mobile Application Development Club",
        description: "Launch of the MAD Club with faculty coordinators and student leaders.\nOrganized by: MAD Club",
        date: new Date("2024-12-20T00:00:00Z"),
        location: "Lords Institute of Engineering & Technology",
        duration: "Not specified",
        category: "club",
        status: "completed",
        imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/events%20images/Inauguration-of-MAD-Club-768x512.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJldmVudHMgaW1hZ2VzL0luYXVndXJhdGlvbi1vZi1NQUQtQ2x1Yi03Njh4NTEyLmpwZWciLCJpYXQiOjE3NTkyMTc4NzYsImV4cCI6MjA3NDU3Nzg3Nn0.bed7CZrvvl58dwFQzUaEB31UY_U2s0cb1j_YvBc3WSU",
        attendees: null,
        rating: null,
    },
    {
        title: "Training Session 1.0 in Mobile Application Development",
        description: "Introductory hands-on session on mobile app development concepts.\nOrganized by: MAD Club",
        date: new Date("2025-03-07T00:00:00Z"),
        location: "Lords Institute of Engineering & Technology",
        duration: "Not specified",
        category: "training",
        status: "completed",
        imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/events%20images/Training-Session-1.0-on-MAD-4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJldmVudHMgaW1hZ2VzL1RyYWluaW5nLVNlc3Npb24tMS4wLW9uLU1BRC00LmpwZyIsImlhdCI6MTc1OTIxODA0OCwiZXhwIjoyMDc0NTc4MDQ4fQ.JCz5sllnONojkHrxlLD4cIgEt0wktD2kkwa4VveNEUw",
        attendees: null,
        rating: null,
    },
    {
        title: "Six Hours Appathon – APP – FUSION",
        description: "A six-hour coding marathon guided by Mr. Aarshad Devani, Senior Software Engineer at Storable India & Lead, Google Developer Groups Hyderabad.\nOrganized by: MAD Club",
        date: new Date("2025-05-10T00:00:00Z"),
        location: "Lords Institute of Engineering & Technology",
        duration: "6 hours",
        category: "hackathon",
        status: "completed",
        imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/events%20images/App-Fusion-9-670x300.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJldmVudHMgaW1hZ2VzL0FwcC1GdXNpb24tOS02NzB4MzAwLmpwZWciLCJpYXQiOjE3NTkyMTgxMzUsImV4cCI6MjA3NDU3ODEzNX0.wmSxLqCr60HUD_C3orJGwIEb_VpzAX0-Qho-L2l6vVY",
        attendees: null,
        rating: null,
    },
    {
        title: "Training Session on Firebase Ignite",
        description: "Hands-on training session on Firebase tools and services. Resource Person: Mr. Abdul Rahman Siddiqui Mohammed (III CSE).\nOrganized by: MAD Club",
        date: new Date("2025-08-02T00:00:00Z"),
        location: "Lords Institute of Engineering & Technology",
        duration: "Not specified",
        category: "training",
        status: "completed",
        imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/events%20images/Training-Session-on-Firebase-Ignite-11.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJldmVudHMgaW1hZ2VzL1RyYWluaW5nLVNlc3Npb24tb24tRmlyZWJhc2UtSWduaXRlLTExLmpwZyIsImlhdCI6MTc1OTIxODE4NSwiZXhwIjoyMDc0NTc4MTg1fQ.AjnyDlaCfOrHp2M8RNu-NzdTqwSdQI-1IqtWOCBIGXk",
        attendees: null,
        rating: null,
    },
    {
        title: "Digital Heist",
        description: "A coding and problem-solving event led by Abdul Rahman Siddiqui Mohammed (III CSE) and Hamza Noor (III CSE).\nOrganized by: MAD Club",
        date: new Date("2025-09-13T00:00:00Z"),
        location: "Lords Institute of Engineering & Technology",
        duration: "Not specified",
        category: "competition",
        status: "completed",
        imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/events%20images/Digital-Heist-11.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJldmVudHMgaW1hZ2VzL0RpZ2l0YWwtSGVpc3QtMTEuanBnIiwiaWF0IjoxNzU5MjE4MjkwLCJleHAiOjIwNzQ1NzgyOTB9.5wMiWdinInQgC6y4vveMchej8jbjz2vGy4HqOj7afGM",
        attendees: null,
        rating: null,
    },
    {
        title: "Appathon – APP – FUSION",
        description: ".\nOrganized by: MAD Club",
        date: new Date("2025-10-00?T00:00:00Z"),
        location: "Lords Institute of Engineering & Technology",
        duration: "? hours",
        category: "hackathon",
        status: "upcoming",
        imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/events%20images/Gemini_Generated_Image_ednwktednwktednw.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJldmVudHMgaW1hZ2VzL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfZWRud2t0ZWRud2t0ZWRudy5wbmciLCJpYXQiOjE3NTkyNTI2MjMsImV4cCI6MTc2MTg0NDYyM30.DcN6STXi-s4rBLVtonkXW3KZS1m9Z3SqVqAeLOp6BkU",
        attendees: null,
        rating: null,
    },
];

const eventsData = (() => {
    const formatted = { upcoming: [], completed: [] };
    rawEventsData.forEach(ev => {
        const simplified = {
            title: ev.title,
            date: ev.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            description: ev.description,
            image: ev.imageUrl
        };
        if (ev.status === 'completed' || ev.date < new Date()) {
            formatted.completed.push(simplified);
        } else {
            formatted.upcoming.push(simplified);
        }
    });
    return formatted;
})();

const rawLeadershipData = [
    // Faculty
    { name: "Dr. Ruhiat Sultana", role: "Faculty Coordinator", description: "Providing academic guidance and coordinating faculty support for the club.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Ruhiat_Mam.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvUnVoaWF0X01hbS5wbmciLCJpYXQiOjE3NTkyMzA1NTEsImV4cCI6MjA3NDU5MDU1MX0.CSShwZN6VvN9twnWWiUokOFP4Z-Y_NYCpHjttaEsYOc", category: "faculty", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    // Club leadership
    { name: "Mohammed Azaan", role: "Lead", description: "Team lead helping coordinate activities.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20143951.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0Mzk1MS5wbmciLCJpYXQiOjE3NTkyMjk4NTMsImV4cCI6MTc5MDc2NTg1M30.QmFhZLEGT8TTR3zRXIShfAhgBeg8jitgtAba-e1zgYU", category: "group_leads", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    { name: "Mujtaba Armaan", role: "Co-Lead", description: "Co-leading initiatives and supporting the team.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144137.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDEzNy5wbmciLCJpYXQiOjE3NTkyMjk5MTEsImV4cCI6MTc5MDc2NTkxMX0.lcSi0SARLUqS-iBmhHKTfrPi4hwUuRZ1wLHbWlOPSs8", category: "group_leads", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    { name: "Safoora Yasmeen", role: "Secretary", description: "Coordinating communications and records.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144210.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDIxMC5wbmciLCJpYXQiOjE3NTkyMzE1NjUsImV4cCI6MTc5MDc2NzU2NX0.FaFNifwEi5yCIHsDGwpQr-kgMOfDJL9DZo1SR_RiqUA", category: "club_leadership", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    { name: "MD Faizan Ahmed", role: "Execom Member", description: "Executive committee member supporting operations.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144106.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDEwNi5wbmciLCJpYXQiOjE3NTkyMjk3NzIsImV4cCI6MTc5MDc2NTc3Mn0.ptKjY4M1gBS8w9iqsiVJHvcIA_g435wJOh2lsQkj8IY", category: "group_leads", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    { name: "Mustafa Imran", role: "Execom Member", description: "Executive committee member supporting strategy and execution.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144025.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDAyNS5wbmciLCJpYXQiOjE3NTkyNDg5NjQsImV4cCI6MTc5MDc4NDk2NH0.mJYoiXAd3PxLhd2qhX8VX2H8ZMUBQuL4VSIn4_HCJvc", category: "group_leads", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    // Group leads / members
    { name: "Syed Saad", role: "Event Co-ordinator", description: "Supporting event planning and coordination.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144548.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDU0OC5wbmciLCJpYXQiOjE3NTkyMzAwMDQsImV4cCI6MTc5MDc2NjAwNH0.yixPxlbO0bWyOUHK3BaXXvv3HhkoxbOaZf4ntuVlv0Y", category: "group_leads", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    { name: "Talha Kaif", role: "Event Co-ordinator", description: "Supporting event operations and logistics.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144510.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDUxMC5wbmciLCJpYXQiOjE3NTkyMjk5ODIsImV4cCI6MTc5MDc2NTk4Mn0.4OKzaVThIpvTSkDdoWPy5C-47zoKA0zuKN9gpHddx4w", category: "group_leads", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    { name: "Aslam Moinuddin", role: "Outreach Lead", description: "Leading partnerships and outreach activities.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144607.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDYwNy5wbmciLCJpYXQiOjE3NTkyMzAwMjMsImV4cCI6MTc5MDc2NjAyM30.WSOKJH9CjKXIv0v9Qha-XaT78C1cBnaUYyI-B8hoG38", category: "group_leads", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    { name: "Shaista Fatima", role: "Design Lead", description: "Designing visuals and brand assets for the club.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144629.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDYyOS5wbmciLCJpYXQiOjE3NTkyMzAwNDAsImV4cCI6MTc5MDc2NjA0MH0.k2E4OS_JrhfeyYi0HjgT0I0wvJR_g6znT5iok42NfTs", category: "group_leads", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    { name: "Abdul Rehman", role: "Tech Lead", description: "Leading technical initiatives and engineering best practices.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144258.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDI1OC5wbmciLCJpYXQiOjE3NTkyMjk0NjEsImV4cCI6MTc5MDc2NTQ2MX0.3VmAk0yBL-ucCTXj96BZRJeeCIsj09s5mNvYwndvsrE", category: "club_leadership", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    { name: "Syed Wameez", role: "Event Manager", description: "Planning and executing events and workshops.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144314.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDMxNC5wbmciLCJpYXQiOjE3NTkyMjk0OTYsImV4cCI6MTc5MDc2NTQ5Nn0.RbctIUfoC7-80YjKuHwLCyg6faa1aFYgeEsCTdkAQSU", category: "club_leadership", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    { name: "Ali Abbas", role: "Documentation Lead", description: "Maintaining documentation and knowledge base.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144336.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDMzNi5wbmciLCJpYXQiOjE3NTkyMjk2NjcsImV4cCI6MTc5MDc2NTY2N30.VUi0TE1R-cSAHjlZxRXd-djzR8gYOUYNCXFuqtXRPx0", category: "group_leads", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    { name: "Umar Ayaan", role: "Operations Lead", description: "Handling logistics and operations for activities.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144406.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDQwNi5wbmciLCJpYXQiOjE3NTkyMjk3MjAsImV4cCI6MTc5MDc2NTcyMH0.ZRoUJdITb1ehz4W2NiV8eIgmJwKdBQIKhUj48y_6YA8", category: "group_leads", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
    { name: "Adil Mohammed", role: "Media Lead", description: "Managing social media and outreach content.", imageUrl: "https://sroormpbssxaujacbdsl.supabase.co/storage/v1/object/sign/images%20of%20leads/Screenshot%202025-09-30%20144427.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMzVlNzcyMi05YWQwLTQ1N2QtYWU5MS1lOTk5OWFhOTAzZDMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMgb2YgbGVhZHMvU2NyZWVuc2hvdCAyMDI1LTA5LTMwIDE0NDQyNy5wbmciLCJpYXQiOjE3NTkyNDkxMDUsImV4cCI6MTc5MDc4NTEwNX0.WwUKOE6ox8RuiIdpori_j0Mg4GTMHaIrSxtB3_9fR3U", category: "group_leads", linkedinUrl: null, githubUrl: null, twitterUrl: null, experience: null, publications: null, studentsMentored: null },
];

const leadershipData = rawLeadershipData.map(item => ({
    name: item.name,
    role: item.role,
    bio: item.description || '',
    image: item.imageUrl || '',
    category: item.category || ''
}));

// Navigation
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    
    document.getElementById(page).classList.add('active');
    document.querySelector(`a[href="#${page}"]`).classList.add('active');
    document.getElementById('navLinks').classList.remove('active');
    
    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Show Events
let currentTab = 'upcoming';
function showEvents(type, button) {
    currentTab = type;
    document.querySelectorAll('.events-tabs .tab-button').forEach(btn => btn.classList.remove('active'));
    if (button) { button.classList.add('active'); }
    
    const container = document.getElementById('eventsContainer');
    container.innerHTML = '';
    
    eventsData[type].forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-content">
                <div class="event-date">${event.date}</div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Load Leadership
function loadLeadership() {
    const container = document.getElementById('leadershipContainer');
    leadershipData.forEach(leader => {
        const card = document.createElement('div');
        card.className = 'leader-card' + (leader.category === 'faculty' ? ' faculty' : '');
        card.innerHTML = `
            ${leader.category === 'faculty' ? '<div class="faculty-badge">Faculty</div>' : ''}
            <img src="${leader.image}" alt="${leader.name}" class="leader-image">
            <div class="leader-name">${leader.name}</div>
            <div class="leader-role">${leader.role}</div>
            <div class="leader-bio">${leader.bio}</div>
        `;
        container.appendChild(card);
    });
}

// Setup form submission with dynamic URL
function setupFormSubmission() {
    const form = document.querySelector('form[action*="formsubmit.co"]');
    if (form) {
        // Set the current page URL with thank-you hash
        const currentUrl = window.location.origin + window.location.pathname + '#thank-you';
        const nextInput = form.querySelector('input[name="_next"]');
        if (nextInput) {
            nextInput.value = currentUrl;
        }
        
        // Add form submission handler
        form.addEventListener('submit', function(e) {
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }
            
            // Fallback: if redirect doesn't work, show thank you page after 3 seconds
            setTimeout(() => {
                if (window.location.hash !== '#thank-you') {
                    navigateTo('thank-you');
                }
            }, 3000);
        });
    }
}

// Loading Screen Management
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.remove('hidden');
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 3000); // Hide after 3 seconds
    }
}

// Typing Animation
class TypingAnimation {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.start();
    }

    start() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let nextDelay = this.speed;

        if (this.isDeleting) {
            nextDelay /= 2;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            nextDelay = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            nextDelay = 500;
        }

        setTimeout(() => this.type(), nextDelay);
    }
}

// Animated Counter
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Particle Background (Simple Canvas Implementation)
function initParticleBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const particlesArray = [];
    const numberOfParticles = 50;

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    
    document.getElementById('particles-js').appendChild(canvas);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let particle of particlesArray) {
            particle.update();
            particle.draw();
        }

        // Draw connections
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) {
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 - distance / 1000})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    initParticles();
    animateParticles();

    window.addEventListener('resize', resizeCanvas);
}

// Scroll-triggered animations and effects
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.createObserver();
        this.addParallaxEffect();
        this.addSmoothScrolling();
    }

    createObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for scroll animations
        const elementsToAnimate = document.querySelectorAll(
            '.feature-card, .event-card, .leader-card, .stat-card, .contact-item'
        );
        elementsToAnimate.forEach(el => {
            el.classList.add('animate-ready');
            observer.observe(el);
        });
    }

    addParallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Parallax effect for floating shapes
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.1;
                shape.style.transform = `translateY(${scrolled * speed}px)`;
            });
            
            // Parallax effect for hero background
            const heroBg = document.querySelector('.hero-bg');
            if (heroBg) {
                heroBg.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    addSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Enhanced card interactions
function enhanceCardInteractions() {
    // Add tilt effect to cards
    const cards = document.querySelectorAll('.feature-card, .event-card, .leader-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
        
        // Add ripple effect
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Navigation enhancements
function enhanceNavigation() {
    const nav = document.querySelector('nav');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide nav
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show nav
            nav.style.transform = 'translateY(0)';
        }
        
        // Add background opacity based on scroll
        const opacity = Math.min(currentScrollY / 100, 1);
        nav.style.backgroundColor = `rgba(15, 23, 42, ${0.95 * opacity})`;
        
        lastScrollY = currentScrollY;
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Show loading screen
    showLoadingScreen();
    
    // Initialize particle background
    initParticleBackground();
    
    // Initialize scroll animations
    new ScrollAnimations();
    
    // Load content
    loadLeadership();
    const firstTab = document.querySelector('.events-tabs .tab-button');
    showEvents('upcoming', firstTab);
    const initialPage = window.location.hash.slice(1) || 'home';
    navigateTo(initialPage);
    
    // Set up form submission
    setupFormSubmission();
    
    // Hide loading screen after content is loaded
    hideLoadingScreen();
    
    // Initialize enhanced features after loading screen
    setTimeout(() => {
        // Enhance card interactions
        enhanceCardInteractions();
        
        // Enhance navigation
        enhanceNavigation();
        
        // Start typing animation
        const dynamicTextElement = document.getElementById('dynamicText');
        if (dynamicTextElement) {
            new TypingAnimation(dynamicTextElement, [
                'Building Tomorrow\'s Apps Today',
                'Innovating Mobile Solutions',
                'Empowering Future Developers',
                'Creating Next-Gen Experiences'
            ]);
        }
        
        // Animate counters when they come into view
        setTimeout(() => {
            const statNumbers = document.querySelectorAll('.stat-number[data-count]');
            statNumbers.forEach(element => {
                const target = parseInt(element.getAttribute('data-count'));
                animateCounter(element, target);
            });
        }, 1000); // Start shortly after other animations
    }, 3000); // Start after loading screen completes
});

// Handle navigation from URL hash
window.addEventListener('hashchange', () => {
    const page = window.location.hash.slice(1) || 'home';
    if (page === 'thank-you') {
        navigateTo('thank-you');
    } else {
        navigateTo(page);
    }
});

// Check for thank you page on initial load
if (window.location.hash === '#thank-you') {
    document.addEventListener('DOMContentLoaded', () => {
        navigateTo('thank-you');
    });
}

// Supabase Configuration and Admin Functionality
let supabase;
let currentUser = null;
let logoClickCount = 0;
let logoClickTimeout;

// Initialize Supabase
function initSupabase() {
    try {
        const supabaseUrl = 'https://sroormpbssxaujacbdsl.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyb29ybXBic3N4YXVqYWNiZHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMTYzNjcsImV4cCI6MjA3Mzg5MjM2N30.oZ1GqqQg3nyl6F66hmuTvGURjv88uVBnCkN9NUEZHwI';
        
        if (typeof supabase === 'undefined' && window.supabase) {
            supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
            console.log('Supabase initialized successfully');
        }
    } catch (error) {
        console.error('Error initializing Supabase:', error);
    }
}

// Admin Access Functions
function setupLogoClickHandler() {
    const logoElement = document.querySelector('.logo');
    if (!logoElement) return;
    
    logoElement.addEventListener('click', function() {
        logoClickCount++;
        
        // Clear existing timeout
        if (logoClickTimeout) {
            clearTimeout(logoClickTimeout);
        }
        
        // Set new timeout to reset count
        logoClickTimeout = setTimeout(() => {
            logoClickCount = 0;
        }, 1000); // Reset after 1 second
        
        // Show admin access after 3 clicks
        if (logoClickCount >= 3) {
            showAdminAccess();
            logoClickCount = 0;
        }
    });
}

function showAdminAccess() {
    const adminAccess = document.getElementById('adminAccess');
    if (adminAccess) {
        adminAccess.style.display = 'block';
        adminAccess.classList.add('show');
        
        // Auto hide after 10 seconds
        setTimeout(() => {
            hideAdminAccess();
        }, 10000);
    }
}

function hideAdminAccess() {
    const adminAccess = document.getElementById('adminAccess');
    if (adminAccess) {
        adminAccess.classList.remove('show');
        setTimeout(() => {
            adminAccess.style.display = 'none';
        }, 300);
    }
}

function showAdminLogin() {
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.style.display = 'flex';
        // Focus on email input
        setTimeout(() => {
            const emailInput = document.getElementById('adminEmail');
            if (emailInput) emailInput.focus();
        }, 100);
    }
}

function closeAdminLogin() {
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.style.display = 'none';
    }
    hideAdminAccess();
}

async function adminLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    
    if (!supabase) {
        alert('Database connection not available');
        return;
    }
    
    try {
        // Try to sign in with Supabase auth
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        
        if (error) {
            // If Supabase auth fails, try simple authentication for backwards compatibility
            if (email === 'lords@madclub.com' && password === 'flutter789') {
                currentUser = { email: email, role: 'admin' };
                closeAdminLogin();
                showAdminDashboard();
                loadAdminAnnouncements();
                return;
            }
            throw error;
        }
        
        if (data.user) {
            currentUser = { email: data.user.email, role: 'admin', id: data.user.id };
            closeAdminLogin();
            showAdminDashboard();
            loadAdminAnnouncements();
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Invalid credentials or login failed: ' + error.message);
    }
}

function showAdminDashboard() {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show admin dashboard
    const dashboard = document.getElementById('adminDashboard');
    if (dashboard) {
        dashboard.classList.add('active');
        dashboard.style.display = 'block';
    }
}

function logoutAdmin() {
    currentUser = null;
    hideAdminDashboard();
    navigateTo('home');
}

function hideAdminDashboard() {
    const dashboard = document.getElementById('adminDashboard');
    if (dashboard) {
        dashboard.classList.remove('active');
        dashboard.style.display = 'none';
    }
}

// Announcement Management Functions
function showAddAnnouncementForm() {
    const form = document.getElementById('announcementForm');
    const formTitle = document.getElementById('formTitle');
    
    if (form && formTitle) {
        // Reset form
        document.getElementById('adminAnnouncementForm').reset();
        document.getElementById('announcementId').value = '';
        formTitle.textContent = 'Add New Announcement';
        
        form.style.display = 'block';
        
        // Focus on first input
        setTimeout(() => {
            const titleInput = document.getElementById('announcementTitle');
            if (titleInput) titleInput.focus();
        }, 100);
    }
}

function hideAnnouncementForm() {
    const form = document.getElementById('announcementForm');
    if (form) {
        form.style.display = 'none';
    }
}

function editAnnouncement(id) {
    // Get announcement data and populate form
    if (!supabase) return;
    
    supabase
        .from('announcements')
        .select('*')
        .eq('id', id)
        .single()
        .then(({ data, error }) => {
            if (error) {
                console.error('Error fetching announcement:', error);
                return;
            }
            
            // Populate form with data
            document.getElementById('announcementId').value = data.id;
            document.getElementById('announcementTitle').value = data.title || '';
            document.getElementById('announcementSubject').value = data.subject || '';
            document.getElementById('announcementDetails').value = data.details || '';
            document.getElementById('announcementImages').value = data.images ? data.images.join(', ') : '';
            document.getElementById('announcementVideos').value = data.videos ? data.videos.join(', ') : '';
            document.getElementById('announcementLinks').value = data.links ? data.links.join(', ') : '';
            
            // Update form title and show form
            document.getElementById('formTitle').textContent = 'Edit Announcement';
            document.getElementById('announcementForm').style.display = 'block';
        });
}

function deleteAnnouncement(id) {
    if (!confirm('Are you sure you want to delete this announcement?')) {
        return;
    }
    
    if (!supabase) return;
    
    supabase
        .from('announcements')
        .delete()
        .eq('id', id)
        .then(({ error }) => {
            if (error) {
                console.error('Error deleting announcement:', error);
                alert('Error deleting announcement: ' + error.message);
            } else {
                loadAdminAnnouncements();
                loadPublicAnnouncements();
                alert('Announcement deleted successfully!');
            }
        });
}

function saveAnnouncement(event) {
    event.preventDefault();
    
    if (!supabase) {
        alert('Supabase not initialized');
        return;
    }
    
    const id = document.getElementById('announcementId').value;
    const title = document.getElementById('announcementTitle').value.trim();
    const subject = document.getElementById('announcementSubject').value.trim();
    const details = document.getElementById('announcementDetails').value.trim();
    const images = document.getElementById('announcementImages').value.trim();
    const videos = document.getElementById('announcementVideos').value.trim();
    const links = document.getElementById('announcementLinks').value.trim();
    
    // Prepare data
    const announcementData = {
        title: title || null,
        subject: subject || null,
        details: details || null,
        images: images ? images.split(',').map(url => url.trim()).filter(url => url) : null,
        videos: videos ? videos.split(',').map(url => url.trim()).filter(url => url) : null,
        links: links ? links.split(',').map(url => url.trim()).filter(url => url) : null,
        created_at: new Date().toISOString()
    };
    
    // Check if at least one field is filled
    if (!title && !subject && !details && !images && !videos && !links) {
        alert('Please fill at least one field');
        return;
    }
    
    const operation = id ? 
        supabase.from('announcements').update(announcementData).eq('id', id) :
        supabase.from('announcements').insert([announcementData]);
    
    operation.then(({ error }) => {
        if (error) {
            console.error('Error saving announcement:', error);
            alert('Error saving announcement: ' + error.message);
        } else {
            hideAnnouncementForm();
            loadAdminAnnouncements();
            loadPublicAnnouncements();
            alert(id ? 'Announcement updated successfully!' : 'Announcement created successfully!');
        }
    });
}

// Load announcements for admin dashboard
function loadAdminAnnouncements() {
    const container = document.getElementById('adminAnnouncementsList');
    if (!container || !supabase) return;
    
    container.innerHTML = '<div class="loading-admin-announcements">Loading announcements...</div>';
    
    supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false })
        .then(({ data, error }) => {
            if (error) {
                console.error('Error loading announcements:', error);
                container.innerHTML = '<div class="no-announcements">Error loading announcements</div>';
                return;
            }
            
            if (!data || data.length === 0) {
                container.innerHTML = '<div class="no-announcements">No announcements yet</div>';
                return;
            }
            
            container.innerHTML = data.map(announcement => {
                const date = new Date(announcement.created_at).toLocaleDateString();
                return `
                    <div class="admin-announcement-item">
                        <div class="admin-announcement-info">
                            <h4>${announcement.title || 'Untitled Announcement'}</h4>
                            <p><strong>Subject:</strong> ${announcement.subject || 'No subject'}</p>
                            <p><strong>Created:</strong> ${date}</p>
                        </div>
                        <div class="admin-announcement-actions">
                            <button class="edit-btn" onclick="editAnnouncement('${announcement.id}')">Edit</button>
                            <button class="delete-btn" onclick="deleteAnnouncement('${announcement.id}')">Delete</button>
                        </div>
                    </div>
                `;
            }).join('');
        });
}

// Load announcements for public page
function loadPublicAnnouncements() {
    const container = document.getElementById('announcementsContainer');
    if (!container || !supabase) return;
    
    container.innerHTML = '<div class="loading-announcements">Loading announcements...</div>';
    
    supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false })
        .then(({ data, error }) => {
            if (error) {
                console.error('Error loading announcements:', error);
                container.innerHTML = '<div class="no-announcements">Error loading announcements</div>';
                return;
            }
            
            if (!data || data.length === 0) {
                container.innerHTML = '<div class="no-announcements">No announcements available</div>';
                return;
            }
            
            container.innerHTML = data.map(announcement => {
                const date = new Date(announcement.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                
                let mediaHtml = '';
                
                // Add images
                if (announcement.images && announcement.images.length > 0) {
                    mediaHtml += `
                        <div class="announcement-media">
                            <div class="announcement-images">
                                ${announcement.images.map(img => `<img src="${img}" alt="Announcement image" loading="lazy">`).join('')}
                            </div>
                        </div>
                    `;
                }
                
                // Add videos
                if (announcement.videos && announcement.videos.length > 0) {
                    mediaHtml += `
                        <div class="announcement-media">
                            <div class="announcement-videos">
                                ${announcement.videos.map(video => {
                                    const videoId = extractYouTubeId(video);
                                    return videoId ? 
                                        `<iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen loading="lazy"></iframe>` :
                                        `<a href="${video}" target="_blank" rel="noopener">Watch Video</a>`;
                                }).join('')}
                            </div>
                        </div>
                    `;
                }
                
                // Add links
                let linksHtml = '';
                if (announcement.links && announcement.links.length > 0) {
                    linksHtml = `
                        <div class="announcement-links">
                            ${announcement.links.map(link => `<a href="${link}" target="_blank" rel="noopener" class="announcement-link">Visit Link</a>`).join('')}
                        </div>
                    `;
                }
                
                return `
                    <div class="announcement-card">
                        <div class="announcement-header">
                            <div>
                                ${announcement.title ? `<h2 class="announcement-title">${announcement.title}</h2>` : ''}
                                ${announcement.subject ? `<h3 class="announcement-subject">${announcement.subject}</h3>` : ''}
                            </div>
                            <div class="announcement-date">${date}</div>
                        </div>
                        ${announcement.details ? `<div class="announcement-details">${announcement.details}</div>` : ''}
                        ${mediaHtml}
                        ${linksHtml}
                    </div>
                `;
            }).join('');
        });
}

// Utility function to extract YouTube video ID
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Update navigation function to support announcements
const originalNavigateTo = window.navigateTo;
window.navigateTo = function(pageId) {
    if (pageId === 'announcements') {
        loadPublicAnnouncements();
    }
    return originalNavigateTo(pageId);
};

// Initialize admin functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Supabase
    setTimeout(initSupabase, 100); // Small delay to ensure Supabase library is loaded
    
    // Setup logo click handler
    setupLogoClickHandler();
    
    // Load announcements when page loads
    setTimeout(() => {
        loadPublicAnnouncements();
    }, 1000);
});

// Make functions globally available
window.showAdminLogin = showAdminLogin;
window.closeAdminLogin = closeAdminLogin;
window.adminLogin = adminLogin;
window.logoutAdmin = logoutAdmin;
window.showAddAnnouncementForm = showAddAnnouncementForm;
window.hideAnnouncementForm = hideAnnouncementForm;
window.saveAnnouncement = saveAnnouncement;
window.editAnnouncement = editAnnouncement;
window.deleteAnnouncement = deleteAnnouncement;
