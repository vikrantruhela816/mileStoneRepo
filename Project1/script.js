const addBtn = document.querySelector(".addBtn")
const popup = document.querySelector(".popup")
const section = document.querySelector("section")
const sub = document.querySelector(".sub")

const blogUrl = document.getElementById("blogUrl")
const blogTitle = document.getElementById("blogTitle")
const blogDescription = document.getElementById("blogDescription")
const blogText = document.getElementById("blogText")

const blogBtn = document.querySelector(".blogBtn")

const blogsGrid = document.querySelector(".blogs")
const blogs = []

function loadData() {
    const items = localStorage.getItem("blogs")
    blogsGrid.innerHTML = items
}

blogBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const blog = {
        blogUrl: blogUrl.value,
        blogTitle: blogTitle.value,
        blogDescription: blogDescription.value,
        blogText: blogText.value
    }

    blogs.push(`<div class="card">
    <img src=${blog.blogUrl}>
    <h2>${blog.blogTitle}</h2>
    <p>${blog.blogDescription}</p>
    <button class="readBtn">Read</button>
    </div>`)

    blogsGrid.innerHTML = blogs
    localStorage.setItem(`${blog.blogTitle}`, JSON.stringify(blog))
    localStorage.setItem("blogs", `${blogs}`)
    popup.style.display = "none"
    section.style.filter = ""
})

addBtn.addEventListener("click", () => {
    popup.style.display = "flex"
    section.style.filter = "blur(8px)"
})

sub.addEventListener("click", () => {
})
