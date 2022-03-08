const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

function getDayInfo(date) {
    const dateParts = date.split('.')
    const date_final = new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`)
    if (!isNaN(date_final)) {
        const first_day = (new Date(`${dateParts[1]}/${1}/${dateParts[2]}`)).getDay()
        const week_num = Math.ceil((date_final.getDate() + first_day) / 7)
        const result = `${days[date_final.getDay()]}, ${week_num} неделя ${months[date_final.getMonth()]} ${date_final.getFullYear()} года`
        return result
    } else {
        document.querySelector('.input_date').value = " "
        return "Неверно указана дата"
    }
}

const btn = document.querySelector('#btn_getInfo')
const btn_clear = document.querySelector('#btn_clear')
const date = document.querySelector('.input_date')

btn.addEventListener('click', () => {
    document.querySelector(".result").innerText = getDayInfo(date.value)
    document.querySelector(".result-block").style.display = 'block'
})

btn_clear.addEventListener('click', () => {
    date.innerHTML = ''
    document.querySelector(".result-block").style.display = 'none'
})