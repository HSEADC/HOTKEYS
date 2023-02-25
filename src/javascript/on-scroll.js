function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('_Show');
    } else {
      change.target.classList.remove('_Show');
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.A_TextUnique');

for (let elm of elements) {
  observer.observe(elm);
}
