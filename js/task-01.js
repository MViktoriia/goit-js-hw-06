// {
//     const catigoriesEl = document.getElementById("categories");
//     // console.log(catigoriesEl);

//     const categoriesAmount = catigoriesEl.children.length;
//     // console.log("Number of categories:", categoriesAmount);
// }

const categoriesEl = document.querySelectorAll('li.item');

const categoriesAmount = categoriesEl.length;
console.log("Number of categories:", categoriesAmount);

const categoriesData = categoriesEl.forEach(function (element) { 
    // console.log('Category:', element.children[0].textContent);
    console.log('Category:',element.firstElementChild.textContent);
    // console.log('Elements:', element.children[1].children.length);
    console.log('Elements:',element.lastElementChild.children.length);
});




