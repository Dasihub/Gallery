const headerTitle = document.querySelector('.header__title')

const handleName = async (name) => {
    try {
        await fetch('/api/user', {method: 'POST', body: JSON.stringify({name}), headers: {'Content-Type': 'application/json'}})
    } catch (e) {
        console.log(e)
    }
}

const name = prompt('Прежде чем зайти на сайт напиши все имя!')

if (name.length) {
    handleName(name)
}

headerTitle.innerHTML = `${headerTitle.innerHTML} ${name}`