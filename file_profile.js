// publish post
let text_post = document.getElementById("11");
let p = document.getElementsByClassName("p2")[0];
let post= document.getElementsByClassName("post2")[0];
let button = document.getElementById("buttonPost");
button.addEventListener("click", () => {
    let text = text_post.value;
    p.textContent = text;
    post.style.display = "block";
    text_post.value = "";
});

// dark and light mood
let dark_mood = document.getElementById("darkmood");
let light_mood = document.getElementById("nightmood");

dark_mood.addEventListener("click", () => {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
    dark_mood.style.display = "none";
    light_mood.style.display = "inline-block";
    let suggestions = document.getElementById("suggestions");
    suggestions.style.color = "#000000";
    let postes = document.getElementsByClassName("post1");
    let post2 = document.getElementsByClassName("post2")[0];
    let createPost = document.getElementById("11");
    for (let i = 0; i < postes.length; i++) {
        postes[i].style.backgroundColor = "#191919";
    }
    post2.style.backgroundColor = "#191919";
    createPost.style.backgroundColor = "#191919";
    createPost.style.color = "#ffffff";
    document.getElementsByClassName("Profile")[0].style.color = "#ffffff";
    document.getElementsByClassName("Profile")[0].style.backgroundColor = "#191919";
});

light_mood.addEventListener("click", () => { 
    document.body.style.backgroundColor = "#DADCDD";
    document.body.style.color = "#000000";
    dark_mood.style.display = "inline-block";
    light_mood.style.display = "none";
    let postes = document.getElementsByClassName("post1");
    let post2 = document.getElementsByClassName("post2")[0];
    let createPost = document.getElementById("11");
    for (let i = 0; i < postes.length; i++) {
        postes[i].style.backgroundColor = "#ffffff";
    }
    post2.style.backgroundColor = "#F1EFEF";
    createPost.style.backgroundColor = "#F1EFEF";
    createPost.style.color = "#000000";
    document.getElementsByClassName("Profile")[0].style.color = "#000000";
    document.getElementsByClassName("Profile")[0].style.backgroundColor = "#DADCDD";

});