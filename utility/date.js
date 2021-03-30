




module.exports.getting_date = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    format_date = Intl.DateTimeFormat('en-AU', options)
        .format(date)
    return format_date;
}