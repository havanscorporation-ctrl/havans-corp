const papersData = {
    math: [
        { title: "Senior Four Mathematics Examination 2026", link: "paper 1.pdf" },
        {title: "Senior Four Mathematics Examination 2026", link: "paper 2.pdf"},
        {title: "Senior Four Mathematics Examination 2026", link: "paper 3.pdf"},
        {title: "Senior Four Mathematics Examination 2026", link: "paper 4.pdf"},
        {title: "Senior Four Mathematics Examination 2026", link: "paper 5.pdf"},
        {title: "Senior Four Mathematics Examination 2026", link: "paper 6.pdf"},
        {title: "Senior Four Mathematics Examination 2026", link: "paper 7.pdf"},
        {title: "Senior Three Mathematics Examination 2026", link: "Revision set 1 S.3.pdf"},
        {title: "Senior Three Mathematics Examination 2026", link: "Revision set 2 S.pdf"},
        {title: "Senior Two Mathematics Examination 2026", link: "Revision set 1 S.2.pdf"},
        {title: "Senior Two Mathematics Examination 2026", link: "Revision set 2 S.2.pdf"},
    ],
    physics: [
        { title: "Senior Four Physics Examination 2026", link: "papers/physics_senior4_2026.pdf" }
    ],
    ict: [
        { title: "Senior Four ICT Examination 2026", link: "papers/ict_senior4_2026.pdf" }
    ]
};

function showPapers(subject) {
    const papersListDiv = document.getElementById("papers-list");
    papersListDiv.innerHTML = ""; // clear previous

    if (!papersData[subject]) {
        papersListDiv.innerHTML = "<p>No papers available for this subject.</p>";
        return;
    }

    const ul = document.createElement("ul");
    papersData[subject].forEach(paper => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = paper.link + "#toolbar=0&navpanes=0&scrollbar=0&zoom=150";
        a.textContent = paper.title;
        a.target = "_blank"; // open in new tab
        li.appendChild(a);
        ul.appendChild(li);
    });

    papersListDiv.appendChild(ul);
}
