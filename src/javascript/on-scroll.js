function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('_show');
    } else {
      change.target.classList.remove('_show');
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element');

for (let elm of elements) {
  observer.observe(elm);
}
