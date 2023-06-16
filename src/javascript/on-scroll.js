function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('_Show')
    } else {
      change.target.classList.remove('_Show')
    }
  })
}

export function onScroll() {
  const options = {
    threshold: [0.5],
  }
  const observer = new IntersectionObserver(onEntry, options)
  const elements = document.querySelectorAll('.A_TextUnique')

  for (let elm of elements) {
    observer.observe(elm)
  }
}
