// change la date sous forme yyyy-MM-dd

export const formatDate = (date) => {
    if (!date) return ''
    const d = new Date(date)
    return d.toISOString().split('T')[0]
}